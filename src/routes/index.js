const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../User.model");
const Session = require("../Session.model");
const { ObjectId } = mongoose.Types;

// @route   GET api/routes
// @desc    This is a basic root route
// @access  Public
router.get("/", async (req, res) => {
  try {
    res.send("Hello World!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/routes/users
// @desc    The one is to retrieve all user preferences in our DB
// @access  Public
router.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

// @route   GET api/routes/sessions
// @desc    The one is to retrieve all sessions in our DB
// @access  Public
router.get("/sessions", async (req, res) => {
  const sessions = await Session.find();

  res.json(sessions);
});

// @route   GET api/routes/session/:id
// @desc    The one is to retrieve session in our DB based on the session ID
// @access  Public
router.get("/session/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const session = await Session.findOne({ _id: ObjectId(id) });
    res.json(session);
  } catch (err) {
    res.json("No session found");
  }
});

// @route   GET api/routes/user/:id
// @desc    The one is to retrieve user preference in our DB based on the ID
// @access  Public
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: ObjectId(id) });
    res.json(user);
  } catch (err) {
    res.json("No user found");
  }
});

// @route   POST api/routes/user-create
// @desc    The one is to create a new user’s preferences
// @access  Public
router.post("/user-create", async (req, res) => {
  const {
    miles_needed,
    charge_duration,
    make,
    model,
    year,
    mileage,
    battery_size,
  } = req.body;

  const user = new User({
    miles_needed,
    charge_duration,
    make,
    model,
    year,
    mileage,
    battery_size,
  });

  await user.save();
  // await user.save().then(() => console.log("User created"));

  res.status(201).json(user);
});

// @route   POST api/routes/user-update/:id
// @desc    The one is to update user preferences for a given id
// @access  Public
router.post("/user-update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        ...req.body,
      }
    );
    res.status(200).json("User preference updated successfully");
  } catch (err) {
    res.json("No user id found");
  }
});

module.exports = router;
