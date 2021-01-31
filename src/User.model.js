// // User.model.js
// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//   miles_needed: Number,
//   charge_duration: Number,
//   make: String,
//   model: String,
//   year: Number,
//   mileage: Number,
//   battery_size: Number,
// });
// const User = mongoose.model("User", userSchema);
// module.exports = User;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
