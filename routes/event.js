const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

router.post("/events", async (req, res) => {
  try {
    const newEvent = new Event({
      name: req.body.name,
      date: req.body.date,
      seats: {
        orchestre: 1164,
        mezzanine: 824,
      },
    });
    await newEvent.save();
    res.status(201).json({ message: "Event successfully created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/events", async (req, res) => {
  try {
    const events = await Event.find().populate("date");

    res.status(201).json(Event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
