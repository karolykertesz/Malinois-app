const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const apiv1 =require("./api/v1")


app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: true}))
app.use("/v1",apiv1)

module.exports = app




