const router = require("express").Router();
const {
  signup,
  signin,
  signout,
  getUsers,
  userSignin,
  userSignup,
  deleteUser,
} = require("../../controllers/admin/AdminAuthController");
const { Auth, adminMiddleware } = require("../../util");
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../../validator/Auth");

router.post("/admin/signin", validateSignInRequest, isRequestValidated, signin);

router.post(
  "/admin/userSignin",
  validateSignInRequest,
  isRequestValidated,
  userSignin
);

router.post("/admin/signup", validateSignUpRequest, isRequestValidated, signup);

router.post(
  "/admin/userSignup",
  validateSignUpRequest,
  isRequestValidated,
  userSignup
);

router.post("/admin/signout", Auth, signout);

router.get("/admin/getUsers", Auth, adminMiddleware, getUsers);

router.delete("/admin/getUsers/:id", Auth, adminMiddleware, deleteUser);

module.exports = router;
