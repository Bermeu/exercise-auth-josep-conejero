const express = require("express");

const getAllItems = require("../controllers/userController");

const itemsRouter = express.Router();

itemsRouter.post("/login", getAllItems);

module.exports = itemsRouter;
