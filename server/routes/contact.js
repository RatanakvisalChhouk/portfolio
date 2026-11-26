import { Router } from "express";
import rateLimit from "express-rate-limit";
import Message from "../models/Message.js";

const router = Router();

// At most 5 messages per IP every 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again later." },
});

// POST /api/contact — save a message from the contact form
router.post("/", contactLimiter, async (req, res, next) => {
  try {
    const { name, email, subject, message, website } = req.body ?? {};

    // Honeypot: real users never fill the hidden "website" field
    if (website) return res.status(201).json({ ok: true });

    const errors = {};
    if (!name || String(name).trim().length < 2) errors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) errors.email = "Please enter a valid email.";
    if (!message || String(message).trim().length < 10) errors.message = "Message should be at least 10 characters.";
    if (Object.keys(errors).length) return res.status(400).json({ error: "Validation failed", errors });

    await Message.create({ name, email, subject, message });
    res.status(201).json({ ok: true, message: "Thanks! Your message has been sent." });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: "Validation failed" });
    }
    next(err);
  }
});

// GET /api/contact — read messages (requires x-admin-key header)
router.get("/", async (req, res, next) => {
  try {
    if (!process.env.ADMIN_KEY || req.get("x-admin-key") !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const messages = await Message.find().sort({ createdAt: -1 }).limit(200).lean();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

export default router;
