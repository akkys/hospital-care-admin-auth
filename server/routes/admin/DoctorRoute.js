const router = require("express").Router();
const {
  getAllDoctors,
  getDoctor,
  addDoctor,
  deleteDoctor,
  updateDoctor,
} = require("../../controllers/admin/DoctorController");
const { Auth, adminMiddleware } = require("../../util");

router.get("/admin/doctors/", getAllDoctors);

router.get("/admin/doctors/:id", getDoctor);

router.post("/admin/doctors/add", Auth, adminMiddleware, addDoctor);

router.delete("/admin/doctors/:id", Auth, adminMiddleware, deleteDoctor);

router.post("/admin/doctors/update/:id", Auth, adminMiddleware, updateDoctor);

module.exports = router;
