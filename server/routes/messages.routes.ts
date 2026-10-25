import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.get("/messages", requireAuth, async (req, res) => {
    const userId = res.locals.userId;
    // fetch this user's messages
    return res.json([]); // placeholder until you build the messages collection
});

export default router;