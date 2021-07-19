const dotenv = require("dotenv");
dotenv.config();
const http = require("http")
const app =  require("./app")
const {mongoStart} = require("./mongo/mongo")

// const authcontroller = require("./controllers/authcontrollers");
// const Authroutes = require("./routes/routes");
// const checkUser = require("./middleware/AuthCheck");

async function runServer(){
  await mongoStart()
  const server = http.createServer(app)
server.listen(process.env.PORT || 3003)
}

runServer()

// app.use(Authroutes);