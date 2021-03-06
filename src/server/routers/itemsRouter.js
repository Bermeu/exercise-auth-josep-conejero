const express = require("express");
/* const debug = require("debug")("items:router"); */

const getAllItems = require("../controllers/itemController");

const itemsRouter = express.Router();

itemsRouter.get("/list", getAllItems);

module.exports = itemsRouter;
