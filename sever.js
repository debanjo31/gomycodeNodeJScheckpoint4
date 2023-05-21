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
  manyRecord();
});

async function main() {
  // Create a new person document.
  const person = new Person({
    name: "Benji Church",
    age: 30,
    favoriteFoods: ["pizza", "pasta", "ice cream"],
  });

  try {
    await person.save();
    console.log("Person saved successfully!");
  } catch (err) {
    console.log(err);
  }
}

async function manyRecord() {
  // Create a new person document.
  const people = [
    {
      name: "John Doe",
      age: 30,
      favoriteFoods: ["pizza", "pasta", "ice cream"],
    },
    {
      name: "Jane Doe",
      age: 25,
      favoriteFoods: ["chocolate", "cookies", "cake"],
    },
    {
      name: "Peter Smith",
      age: 40,
      favoriteFoods: ["steak", "potatoes", "vegetables"],
    },
  ];
  try {
    // Save the person document.
    // Create the people
    // Create the people
    const promises = people.map((person) => Person.create(person));

    // Wait for all the promises to resolve
    Promise.all(promises).then((createdDocuments) => {
      console.log("People created successfully!");
    });
    console.log("Person saved successfully!");
  } catch (err) {
    console.log(err);
  }
}

//Find all the people having a given name, using Model.find() -> [Person
Person.find({ name: "John Doe" }, function (err, person) {
  if (err) {
    console.log(err);
  } else {
    console.log(person);
  }
});

//Delete One Document Using model.findByIdAndRemove
Person.findOneAndRemove({ name: "John Doe" }, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Person deleted successfully!");
  }
});

async function deleteRecord() {
  const query = { name: "Mary" };
  try {
    // Delete the people
    Person.remove(query, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("People deleted successfully!");
      }
    });
  } catch (err) {
    console.log(err);
  }
}

async function chainQuery() {
  // Find all the people who like burritos
  const query = { favoriteFoods: ["burrito"] };

  // Sort the results by name
  query.sort({ name: 1 });

  // Limit the results to two documents
  query.limit(2);

  // Hide the age field
  query.select({ age: 0 });

  try {
    // Find the people
    Person.find(query, function (err, people) {
      if (err) {
        console.log(err);
      } else {
        console.log(people);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

async function deleteAndUpdate() {
  const personId = "5eb93f9b2921e80016686642";
  try {
    // Delete the people
    Person.findById(personId, function (err, person) {
      if (err) {
        console.log(err);
      } else {
        // Add "hamburger" to the list of the person's favorite foods
        person.favoriteFoods.push("hamburger");

        // Mark the person as modified
        person.markModified("favoriteFoods");

        // Save the person
        person.save(function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Person updated successfully!");
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}
app.listen(PORT, () => {
  console.log("Sever started");
});
