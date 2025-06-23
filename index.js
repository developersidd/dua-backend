// Dependencies
const express = require("express");
const CategoryRouter = require("./src/routes/category.route");
const DuaRouter = require("./src/routes/dua.route");
const SubCategoryRouter = require("./src/routes/subCategory.route");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors(
  {
    origin: process.env.CORS_ORIGIN
  }
));

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: `App is Running on ports ${HTTP_PORT}` });
});
app.use("/api/v1/category", CategoryRouter);
app.use("/api/v1/subcategory", SubCategoryRouter);
app.use("/api/v1/dua", DuaRouter);

// Default response for any other request
app.use(function (req, res) {
  res.status(404).json({ message: "Route not found" });
});

// Server port
const HTTP_PORT = process.env.PORT || 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
