const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + '/form.html');
  res.send("Sever started");
});

app.listen(8080, () => {
  console.log("Sever started");
});
