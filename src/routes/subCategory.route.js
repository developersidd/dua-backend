const express = require("express");
const { getSubCategories } = require("../controllers/subCategory.controller");

const router = express.Router();
// get all categories
router.get("/:id", getSubCategories);

module.exports = router;
