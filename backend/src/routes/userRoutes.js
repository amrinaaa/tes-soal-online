const express = require("express");
const { createUser } = require("backend/src/controllers/userControllers.js");

const router = express.Router();

router.post("/user", createUser);

module.exports = router;
