const jwt = require("jsonwebtoken");
const debug = require("debug")("items:middlewares:auth");

const authToken = (req, res, next) => {
  const authorization = req.header("Authorization");
  debug(`auth ${authorization}`);
  if (!authorization) {
    const error = new Error("Token is missing!");
    error.code = 401;
    next(error);
  }
  try {
    const decodedTokenOK = jwt.verify(authorization, process.env.JWT_SECRET);
    debug(decodedTokenOK);
    req.user = decodedTokenOK;
    next();
  } catch (error) {
    error.code = 401;
    error.message = "Invalid token!";
    next(error);
  }
};

module.exports = authToken;
