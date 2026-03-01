const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dishRoute = require("./routes/dishes");
const messageRoute = require("./routes/messages");
const reservationRoute = require("./routes/reservations");
const cors = require("cors");
const app = express();

app.use(cors()); // Autorise le frontend à parler au backend
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Succussfull!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/api/dishes", dishRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reservations", reservationRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
