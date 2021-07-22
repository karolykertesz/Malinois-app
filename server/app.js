const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const apiv1 =require("./api/v1")
const path = require("path")
const fronthPath = path.join(__dirname, "public",)

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000"}))
app.use("/v1",apiv1)
app.get("/*",(req,res)=> {
  res.sendFile(path.join(fronthPath ,"index.html"))
})
module.exports = app




