const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  phoneNum: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  lastreservation: {
    type: String,

  }
});

module.exports = User = mongoose.model("user", UserSchema);
