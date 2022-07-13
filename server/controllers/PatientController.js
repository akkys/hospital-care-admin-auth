const Patient = require("../models/PatientModel");

const addPatient = async (req, res) => {
  try {
    const {
      pid,
      name,
      age,
      gender,
      address,
      admitDate,
      status,
      contact,
      roomType,
      roomNum,
      docName,
    } = req.body;

    if (
      !pid ||
      !name ||
      !age ||
      !gender ||
      !address ||
      !admitDate ||
      !status ||
      !contact ||
      !roomType ||
      !roomNum ||
      !docName
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newPatient = new Patient({
      pid,
      name,
      age,
      gender,
      address,
      admitDate,
      status,
      contact,
      roomType,
      roomNum,
      docName,
      userId: req.user,
    });

    const savedPatient = await newPatient.save();
    res.json(savedPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patientData = await Patient.findByIdAndUpdate({
      userId: req.user,
      _id: req.params.id,
    });
    if (patientData) {
      patientData.pid = req.body.pid;
      patientData.name = req.body.name;
      patientData.age = req.body.age;
      patientData.gender = req.body.gender;
      patientData.address = req.body.address;
      patientData.admitDate = Date.parse(req.body.admitDate);
      patientData.status = req.body.status;
      patientData.contact = req.body.contact;
      patientData.roomNum = req.body.roomNum;
      patientData.roomType = req.body.roomType;
      patientData.docName = req.body.docName;
    }

    const updatedPatient = await patientData.save();
    res.json(updatedPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllPatients = async (req, res) => {
  const patientData = await Patient.find();
  res.json(patientData);
};

const getPatient = async (req, res) => {
  const patientData = await Patient.findById({
    userId: req.user,
    _id: req.params.id,
  });
  res.json(patientData);
};

const deletePatient = async (req, res) => {
  const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
  res.json(deletedPatient);
};

module.exports = {
  addPatient,
  updatePatient,
  getAllPatients,
  getPatient,
  deletePatient,
};
