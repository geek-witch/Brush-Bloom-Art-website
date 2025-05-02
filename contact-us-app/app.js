import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import open from "open"; // Auto-open browser
import mailController from "./controllers/mailController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.post("/send", mailController);

// Start server
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Server running at ${url}`);
  open(url); // Open browser
});
