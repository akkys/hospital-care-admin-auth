const router = require("express").Router();
const {
  deleteRoom,
  getAllRooms,
  getRoom,
  addRoom,
  updateRoom,
} = require("../../controllers/admin/RoomController");
const { Auth, adminMiddleware } = require("../../util");

router.get("/admin/rooms/", getAllRooms);

router.get("/admin/rooms/:id", getRoom);

router.post("/admin/rooms/add", Auth, adminMiddleware, addRoom);

router.post("/admin/rooms/update/:id", Auth, adminMiddleware, updateRoom);

router.delete("/admin/rooms/:id", Auth, adminMiddleware, deleteRoom);

module.exports = router;
