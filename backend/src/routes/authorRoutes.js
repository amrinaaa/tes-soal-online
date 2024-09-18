const express = require("express");
const { createTest } = require("backend/src/controllers/authorController.js");

const router = express.Router();

router.post("/create-test", createTest);

module.exports = router;