const Reservation = require("../models/Reservation");
const router = require("express").Router();

//ADD RESERVATION
router.post("/add", async (req, res) => {
  const newReservation = new Reservation(req.body);
  try {
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL RESERVATIONS

router.get("/find", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
