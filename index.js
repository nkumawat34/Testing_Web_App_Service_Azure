const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const appName = process.env.APP_NAME || "Node App";

// Serve static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to ${appName}</h1><p>Try /users for API</p>`);
});

app.use("/users", require("./routes/users"));

// 404 handling
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`${appName} running on port ${port}`);
});
