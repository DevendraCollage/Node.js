const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am a Sever!");
});

const start = async () => {
  try {
    app.listen(8000, () => {
      console.log("I am live on server port no : 8000");
    });
  } catch (error) {}
};

start();
