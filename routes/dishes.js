const Dish = require("../models/Dish");
const router = require("express").Router();

//ADD DISH
router.post("/add", async (req, res) => {
  const newDish = new Dish(req.body);
  try {
    const savedDish = await newDish.save();
    res.status(200).json(savedDish);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE DISH
router.put("/update/:id", async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE DISH
router.delete("/delete/:id", async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ONE DISH
router.get("/find/:id", async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL DISHES
router.get("/find", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
