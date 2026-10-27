import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { users, messages } from "../db";
import { ObjectId } from "mongodb";

const router = Router();

router.get("/messages", requireAuth, async (req, res) => {
    const userId = res.locals.userId;
    // fetch this user's messages
    return res.json([]); // placeholder until you build the messages collection
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