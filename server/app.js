const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: true}))
app.get("/",(req,res)=> {
  res.status(200).json({message:"ok"})
})
module.exports = app




// gSDKGtgqhyCELfQy