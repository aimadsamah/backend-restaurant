const Message = require("../models/Message");
const router = require("express").Router();

//ADD MESSAGE
router.post("/add", async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CHANGER STATUS
router.patch("/:id/read", async (req, res) => {
  await Message.findByIdAndUpdate(req.params.id, { read: true });
  res.status(200).send({ message: "Statut mis à jour" });
});

//UPDATE  MESSAGE
router.put("/update/:id", async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE MESSAGE
router.delete("/delete/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json("the message has been deleted successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL MESSAGES
router.get("/find", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
