const express = require("express");
const {
  userLogin,
  userRegister,
  getAllUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/users/login", userLogin);

router.get("/list", getAllUsers);

module.exports = router;
