const { Router } = require("express");
const router = require("express").Router();
const authcontroller = require("../controllers/authcontrollers");

router.post("/signup", authcontroller.sign_up_post);
router.post("/login", authcontroller.login_post);
router.get("/")

module.exports = router;
