const debug = require("debug")("items:userController");
const chalk = require("chalk");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../database/models/User");

const userLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const error = new Error(`User ${username} not found!`);
      error.code = 401;
      next(error);
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        const error = new Error(`Password match failed!`);
        error.code = 401;
        next(error);
      } else {
        const userData = { name: user.name, id: user.id };
        const token = jwt.sign(userData, process.env.JWT_SECRET);
        debug(
          chalk.cyanBright(
            `Token ${token} generated for > user ${user.name} id:${user.id}`
          )
        );
        res.json({ token });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
