const User = require("../../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

process.env.JWT_SECRET = "secret";

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user) {
      return res.status(400).json({ message: "Admin already registered." });
    }

    const { firstName, lastName, role, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      hash_password,
      role,
    });
    newUser.save((error, data) => {
      if (error) {
        return res.status(400).json({ message: "Something went wrong!" });
      }
      if (data) {
        return res
          .status(201)
          .json({ message: "Admin registered successfully!", user: data });
      }
    });
  });
};

const signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (error) return res.status(400).json({ error });
    if (user && user.role === "Admin") {
      const isPasswordValid = await user.authenticate(req.body.password);
      if (isPasswordValid) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.cookie("token", token, { expiresIn: "2d" });
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        res.status(400).json({ message: "Invalid Password." });
      }
    } else {
      return res.status(400).json({ message: "Admin not found." });
    }
  });
};

const userSignup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user) {
      return res.status(400).json({ message: "User already registered." });
    }

    const { firstName, lastName, role, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      hash_password,
      role,
    });
    newUser.save((error, data) => {
      if (error) {
        return res.status(400).json({ message: "Something went wrong!" });
      }

      if (user) {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        return res.status(201).json({
          message: "User registered successfully!",
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      }
    });
  });
};

const userSignin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPasswordValid = await user.authenticate(req.body.password);
      if (isPasswordValid) {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        res.status(400).json({ message: "Invalid Password." });
      }
    } else {
      return res.status(400).json({ message: "User Not Found." });
    }
  });
};

const getUsers = async (req, res) => {
  const userData = await User.find();
  res.json(userData);
};

const deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.json(deletedUser);
};

const signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Signed out successfully!" });
};

module.exports = {
  signup,
  signin,
  userSignup,
  userSignin,
  signout,
  getUsers,
  deleteUser,
};
