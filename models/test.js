const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
  id: Number,
  name: String,
  address: String,
  mobile: Number
});

module.exports = mongoose.model("person", personSchema);
