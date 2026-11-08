import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { users, messages } from "../db";
import { ObjectId } from "mongodb";
import { getOnlineIds } from "../presence";

const router = Router();

router.get("/messages", requireAuth, async (req, res) => {
    try {
        const user = await users.findOne(
            { _id: new ObjectId(res.locals.userId) },
            { projection: { username: 1, email: 1 } } // only these fields leave the database
        );

        if (!user) {
            return res.status(401).json({ error: "Account not found" });
        }

        return res.json({ username: user.username, email: user.email });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

// Past messages between me and one other person
router.get("/messages/:otherId", requireAuth, async (req, res) => {
    const myId = res.locals.userId;
    const otherId = req.params.otherId;

    const history = await messages
        .find({
            $or: [
                { senderId: myId, receiverId: otherId },
                { senderId: otherId, receiverId: myId },
            ],
        })
        .sort({ createdAt: -1 }) // newest first
        .limit(100)
        .toArray();

    return res.json(history.reverse());
});

// Find someone by exact username, so you know who to message
router.get("/users/by-username/:username", requireAuth, async (req, res) => {
    const user = await users.findOne(
        { username: req.params.username },
        { projection: { username: 1 } } // never send email or password hash
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json({ id: user._id.toString(), username: user.username });
});

router.get("/users", requireAuth, async (req, res) => {
    try {
        const myId = res.locals.userId as string;

        // One entry per person I've exchanged messages with
        const conversations = await messages
            .aggregate([
                { $match: { $or: [{ senderId: myId }, { receiverId: myId }] } },
                { $sort: { createdAt: -1 } },
                {
                    $group: {
                        // the "other person" is whichever side isn't me
                        _id: { $cond: [{ $eq: ["$senderId", myId] }, "$receiverId", "$senderId"] },
                        lastMessage: { $first: "$text" },
                        lastAt: { $first: "$createdAt" },
                        lastSenderId: { $first: "$senderId" },
                        unread: {
                            $sum: {
                                $cond: [
                                    { $and: [{ $eq: ["$receiverId", myId] }, { $lte: ["$readAt", null] }] },
                                    1,
                                    0,
                                ],
                            },
                        },
                    },
                },
                { $sort: { lastAt: -1 } }, // most recent conversation first
                { $limit: 100 },
            ])
            .toArray();

        const ids = conversations.map((c) => c._id as string).filter((id) => ObjectId.isValid(id));

        const people = await users
            .find(
                { _id: { $in: ids.map((id) => new ObjectId(id)) } },
                { projection: { username: 1 } } // no emails or hashes
            )
            .toArray();

        const nameById = new Map(people.map((p) => [p._id.toString(), p.username as string]));

        return res.json(
            conversations
                .filter((c) => nameById.has(c._id)) // drops people whose account was deleted
                .map((c) => ({
                    id: c._id as string,
                    username: nameById.get(c._id) as string,
                    preview: String(c.lastMessage).slice(0, 60),
                    lastAt: c.lastAt,
                    lastFromMe: c.lastSenderId === myId,
                    unread: c.unread as number,
                }))
        );
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});


router.get("/users/search", requireAuth, async (req, res) => {
    const q = String(req.query.q ?? "").trim().slice(0, 30);

    // Too short a search would list half the database
    if (q.length < 2) {
        return res.json([]);
    }

    // Treat what the user typed as plain text, not as a regex pattern
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    try {
        const list = await users
            .find(
                {
                    _id: { $ne: new ObjectId(res.locals.userId) }, // not me
                    verified: true,
                    username: { $regex: `^${safe}`, $options: "i" }, // starts with, any case
                },
                { projection: { username: 1 } } // no emails or hashes
            )
            .sort({ username: 1 })
            .limit(10)
            .toArray();

        return res.json(list.map((u) => ({ id: u._id.toString(), username: u.username, email: u.email })));
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

router.get("/online", requireAuth, async (req, res) => {
    try {
        const myId = res.locals.userId as string;

        const ids = getOnlineIds()
            .filter((id) => id !== myId && ObjectId.isValid(id))
            .slice(0, 100);

        const list = await users
            .find(
                { _id: { $in: ids.map((id) => new ObjectId(id)) }, verified: true },
                { projection: { username: 1 } } // no emails or hashes
            )
            .sort({ username: 1 })
            .toArray();

        return res.json(list.map((u) => ({ id: u._id.toString(), username: u.username })));
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;