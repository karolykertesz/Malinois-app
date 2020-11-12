const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authcontroller = require("./controllers/authcontrollers");
const Authroutes = require("./routes/routes");
const checkUser = require("./middleware/AuthCheck");
app.use(express.json());
app.use(cookieParser());
// Middlewares

app.get("*", checkUser);
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("db connected"));

app.listen(5000), console.log("app connected");

app.use(Authroutes);
