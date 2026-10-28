import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { users, messages } from "../db";
import { ObjectId } from "mongodb";

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
        .sort({ createdAt: 1 })
        .limit(100)
        .toArray();

    return res.json(history);
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

export default router;