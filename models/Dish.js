const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["entree", "plat", "dessert", "boisson"],
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["oui", "non"],
      default: "oui",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Dish", DishSchema);
