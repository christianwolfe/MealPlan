const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  location: {
    type: String,
    require: true,
  },
  lastreservation: {
    type: String,
  },
});

module.exports = Reservation = mongoose.model("Reservation", ReservationSchema);
