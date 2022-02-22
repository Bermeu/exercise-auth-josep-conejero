const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
  operatingsystem: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Item = model("Item", ItemSchema, "items");

module.exports = Item;
