const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true)
    const conn = await mongoose.connect(process.env.offlineuri);
  
    console.log(`Mongodb connected:${conn.connection.host}`);
  
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
