let Rooms = require("../../models/RoomModel");

const addRoom = async (req, res) => {
  try {
    const { num, name, capacity, groups, fromTime, toTime } = req.body;

    if (!num || !name || !capacity || !groups || !fromTime || !toTime)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newRoom = new Rooms({
      num,
      name,
      capacity,
      groups,
      fromTime,
      toTime,
      userId: req.user,
    });

    const savedRooms = await newRoom.save();
    res.json(savedRooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const roomData = await Rooms.findByIdAndUpdate({
      userId: req.user,
      _id: req.params.id,
    });
    if (roomData) {
      roomData.num = req.body.num;
      roomData.name = req.body.name;
      roomData.capacity = req.body.capacity;
      roomData.groups = req.body.groups;
      roomData.fromTime = req.body.fromTime;
      roomData.toTime = req.body.toTime;
    }

    const updatedRooms = await roomData.save();
    res.json(updatedRooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllRooms = async (req, res) => {
  const roomData = await Rooms.find();
  res.json(roomData);
};

const getRoom = async (req, res) => {
  const roomData = await Rooms.findById({
    userId: req.user,
    _id: req.params.id,
  });
  res.json(roomData);
};

const deleteRoom = async (req, res) => {
  const deletedRoom = await Rooms.findByIdAndDelete(req.params.id);
  res.json(deletedRoom);
};

module.exports = { addRoom, updateRoom, getAllRooms, getRoom, deleteRoom };
