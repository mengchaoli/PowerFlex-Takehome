// Session.model.js
const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema({
  session: {
    Wh_per_mile: Number,
    chart_data: {
      actual_energy_delivered: [],
      predictive_energy_delivered: [],
      time: [],
    },
  },
});
const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
