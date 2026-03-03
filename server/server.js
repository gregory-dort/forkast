// prep-time/server/server.js

//Initializing dotenv 
const dotenv = require('dotenv');
dotenv.config();

// Initializing dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import API Routes
const mealRoutes = require('./routes/meal-routes.js');
const userRoutes = require('./routes/user-routes.js');

// Express app creation and port configuration
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());

// API Routes
app.use("/api/meals", mealRoutes);
app.use("/api/users", userRoutes);

// Test to see if server is running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Forkast is running!" });
});

app.listen(PORT, () => {
  console.log(`Forkast is running on http://localhost:${PORT}`);
});
