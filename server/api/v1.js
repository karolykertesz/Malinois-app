const apiv1 = require("express").Router()
const {ping,signUp,logIn} = require("../routes/routes")

apiv1.use("/signup",signUp)
apiv1.use("/login",logIn)
apiv1.use("/ping",ping)
 
module.exports = apiv1