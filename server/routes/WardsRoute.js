const router = require("express").Router();
const {
  getAllWards,
  addWard,
  updateWard,
  deleteWard,
} = require("../controllers/WardController");
const { Auth } = require("../util");

router.get("/wards/", getAllWards);

router.post("/wards/add", Auth, addWard);

router.post("/wards/update/:id", Auth, updateWard);

router.delete("/wards/:id", Auth, deleteWard);

module.exports = router;
