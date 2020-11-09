const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authcontroller = require("./controllers/authcontrollers");

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"));

app.listen(process.env.PORT, () => console.log("app connected"));

// Middlewares

app.use(express.json());
app.use(cookieParser());
app.use(authcontroller);
