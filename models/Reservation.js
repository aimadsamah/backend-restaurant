const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  name: {
    type: "String",
    required: "true",
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: "String",
    required: "true",
  },
  date: {
    type: "String",
    required: "true",
  },
  time: {
    type: "String",
    required: "true",
  },
  convives: {
    type: "String",
    required: "true",
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
