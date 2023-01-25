const mongoose = require("mongoose");
const USER = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name "],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please specify an email"],
    },

    password: {
      type: String,
    },


  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("USER", USER);
