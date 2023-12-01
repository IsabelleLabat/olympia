const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/OlympiaBis");

const eventRoutes = require("./routes/event");

app.use(eventRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(3000, () => console.log("Server started"));
