const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const Item = require("../../database/models/Item");

const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

module.exports = getAllItems;
