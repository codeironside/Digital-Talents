const express= require("express")
const connectDB = require("./config/database.js")
const { errorHandler } = require("./middleware/errorhandler.js")
const app = express()
const dotenv = require("dotenv").config()


const port = process.env.port||1010

connectDB()

app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

app.use("/user", require("./routes/user"));
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})