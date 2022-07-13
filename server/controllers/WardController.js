let Wards = require("../models/WardModel");

const addWard = async (req, res) => {
  try {
    const { roomType, desc, price } = req.body;

    if (!roomType || !desc || !price)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newWard = new Wards({
      roomType,
      desc,
      price,
      userId: req.user,
    });

    const savedWard = await newWard.save();
    res.json(savedWard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateWard = async (req, res) => {
  try {
    const wardData = await Wards.findByIdAndUpdate({
      userId: req.user,
      _id: req.params.id,
    });
    if (wardData) {
      wardData.roomType = req.body.roomType;
      wardData.desc = req.body.desc;
      wardData.price = req.body.price;
    }

    const updatedward = await wardData.save();
    res.json(updatedward);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllWards = async (req, res) => {
  const wardData = await Wards.find();
  res.json(wardData);
};

const deleteWard = async (req, res) => {
  const deletedWard = await Wards.findByIdAndDelete(req.params.id);
  res.json(deletedWard);
};

module.exports = { addWard, updateWard, getAllWards, deleteWard };
