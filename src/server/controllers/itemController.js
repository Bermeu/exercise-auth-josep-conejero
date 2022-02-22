const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const Item = require("../../database/models/Item");
const User = require("../../database/models/User");

const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};
