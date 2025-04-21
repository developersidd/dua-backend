const express = require("express");
const { getDuas } = require("../controllers/dua.controller.js");

const router = express.Router();
// get all categories
router.get("/:id", getDuas);

module.exports = router;