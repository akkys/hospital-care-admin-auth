const router = require("express").Router();
const { signup, signin, signout } = require("../controllers/AuthController");
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validator/Auth");
const { Auth } = require("../util");

router.post("/signin", validateSignInRequest, isRequestValidated, signin);

router.post("/signup", validateSignUpRequest, isRequestValidated, signup);

router.post("/signout", Auth, signout);

module.exports = router;
