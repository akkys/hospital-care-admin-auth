const router = require("express").Router();
const {
  updatePatient,
  getAllPatients,
  getPatient,
  addPatient,
  deletePatient,
} = require("../controllers/PatientController");
const { Auth } = require("../util");

router.get("/patients/", Auth, getAllPatients);

router.get("/patients/:id", Auth, getPatient);

router.post("/patients/add", Auth, addPatient);

router.post("/patients/update/:id", Auth, updatePatient);

router.delete("/patients/:id", Auth, deletePatient);

module.exports = router;
