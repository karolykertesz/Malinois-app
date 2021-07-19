const { Router } = require("express");
const router = require("express").Router();
const authcontroller = require("../controllers/authcontrollers");

const signUp = router.post("/", authcontroller.sign_up_post);
const logIn =router.post("/", authcontroller.login_post);
const ping = router.get("/",(req,res)=> {
  res.status(200).json({
    message: "all ok"
  })
})

module.exports = {
  signUp,
  logIn,
  ping
};
