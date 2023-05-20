let mongoose = require("mongoose");
let validator = require("validator");
let personSchema = new mongoose.Schema({
  person: {
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: { type: [String] },
  },
});

module.exports = mongoose.model("Person", personSchema);
