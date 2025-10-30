// userRoutes.js
import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

// Public route
router.get("/public", (req, res) => {
  res.json({ message: "This is a public route, no authentication required." });
});

// Protected route (requires token)
router.get("/private", auth, (req, res) => {
  res.json({ message: "Welcome! You have access to the private route." });
});

export default router;
