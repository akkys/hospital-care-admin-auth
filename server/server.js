const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const db = "mongodb://127.0.0.1:27017/hospitalCareDb";

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected to SERVER."))
  .catch((err) => console.log(err));

const adminRoute = require("./routes/admin/AdminAuthRoutes");
const apptRoutes = require("./routes/AppointmentRoute");
const doctorRoutes = require("./routes/admin/DoctorRoute");
const roomRoutes = require("./routes/admin/RoomRoute");
const patientRoutes = require("./routes/PatientRoute");
const wardRoutes = require("./routes/WardsRoute");
const branchRoutes = require("./routes/admin/BranchRoute");

app.use("/api", adminRoute);
app.use("/api", apptRoutes);
app.use("/api", doctorRoutes);
app.use("/api", roomRoutes);
app.use("/api", patientRoutes);
app.use("/api", wardRoutes);
app.use("/api", branchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
