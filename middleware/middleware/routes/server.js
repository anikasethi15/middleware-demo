import express from "express";
import bodyParser from "body-parser";
import logger from "./middleware/logger.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 5000;

// Middleware setup
app.use(bodyParser.json());
app.use(logger); // Global logging middleware

// Routes
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Middleware Demonstration (Logging & Authentication)");
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
