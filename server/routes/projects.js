import { Router } from "express";
import Project from "../models/Project.js";

const router = Router();

// GET /api/projects?category=web
router.get("/", async (req, res, next) => {
  try {
    const filter = {};
    if (["web", "design", "data", "other"].includes(req.query.category)) filter.category = req.query.category;
    const projects = await Project.find(filter).sort({ featured: -1, order: 1, createdAt: -1 }).lean();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

export default router;
