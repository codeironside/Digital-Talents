const express= require("express")
const connectDB = require("./config/database.js")
const { errorHandler } = require("./middleware/errorhandler.js")
const app = express()
const dotenv = require("dotenv").config()
const cluster = require('cluster');



const port = process.env.port||1010

connectDB()

app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

app.use("/user", require("./routes/user"));
app.use(errorHandler)



if (cluster.isMaster) {
    // Code for the master process
    const numWorkers = require('os').cpus().length;
for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
}

} else {
    // Code for the worker process
    app.listen(port, () => console.log(`Worker ${process.pid} listening on port ${port}`));

}

