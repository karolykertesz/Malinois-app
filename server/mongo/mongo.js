const mongoose = require("mongoose");

mongoose.connection.once("open", ()=> {
  console.log("DB connected")
})
mongoose.connection.on("error", ()=> {
  throw new Error("connection error");

})
const mongoStart = async()=> {
  await mongoose.connect(
    process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
}


module.exports= {
  mongoStart
}