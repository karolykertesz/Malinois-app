const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/authcontrollers");

router.post("/signup", authcontroller.userSignUp);

module.exports = router;
