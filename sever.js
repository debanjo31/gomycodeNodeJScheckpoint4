require("dotenv").config();
const express = require("express");
const app = express();
const mydb = require("./db/database");
const PORT = process.env.DB_PORT;
const Person = require("./db/person");

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + '/form.html');
  res.send("Sever started");
  main();
});

async function main() {
  // Create a new person document.
  const person = new Person({
    name: "Benji Church",
    age: 30,
    favoriteFoods: ["pizza", "pasta", "ice cream"],
  });

  try {
    const person = new Person({
      name: "Benji Church",
      age: 30,
      favoriteFoods: ["pizza", "pasta", "ice cream"],
    });
    // Save the person document.
    await person.save();
    console.log("Person saved successfully!");
  } catch (err) {
    console.log(err);
  }
}

app.listen(PORT, () => {
  console.log("Sever started");
});
