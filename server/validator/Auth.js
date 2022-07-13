const { check, validationResult } = require("express-validator");

exports.validateSignUpRequest = [
  check("firstName").notEmpty().withMessage("First Name is required."),
  check("lastName").notEmpty().withMessage("Last Name is required."),
  check("role").notEmpty().withMessage("Role is required."),
  check("email").isEmail().withMessage("Valid Email is required."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long."),
];

exports.validateSignInRequest = [
  check("email").isEmail().withMessage("Valid Email is required."),
  check("password").notEmpty().withMessage("Password is required."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long."),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
