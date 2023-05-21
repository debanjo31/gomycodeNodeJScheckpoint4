let mongoose = require("mongoose");
let personSchema = new mongoose.Schema({
  person: {
    name: { type: String },
    age: { type: Number },
    favoriteFoods: { type: [String] },
  },
});

module.exports = mongoose.model("Person", personSchema);
