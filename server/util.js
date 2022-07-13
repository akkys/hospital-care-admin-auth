const jwt = require("jsonwebtoken");

process.env.JWT_SECRET = "secret";

const Auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid token" });
      }
      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied" });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(400).json({ message: "Admin Access Denied!" });
  }
  next();
};

const userMiddleware = (req, res, next) => {
  if (req.user.role !== "User") {
    return res.status(400).json({ message: "User Access Denied!" });
  }
  next();
};

module.exports = { Auth, adminMiddleware, userMiddleware };
