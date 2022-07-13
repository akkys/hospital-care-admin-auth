const router = require("express").Router();
const {
  addAppt,
  updateAppt,
  getAllAppt,
  getAppt,
  deleteAppt,
} = require("../controllers/ApptController");
const { Auth } = require("../util");

router.post("/appointments/add", Auth, addAppt);

router.post("/appointments/update/:id", Auth, updateAppt);

router.get("/appointments/", Auth, getAllAppt);

router.get("/appointments/:id", Auth, getAppt);

router.delete("/appointments/:id", Auth, deleteAppt);

module.exports = router;
