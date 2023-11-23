import User from "../models/User.js";
import express from 'express';

const user = express.Router();

user.get("/find", async (req, res) => {
  const query = req.query.name;
  const users = await User.findAll({
    where: {
      name: query,
    },
  });
  res.json(users);
});

user.post("/new", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  const saveUser = async () => {
    const savedUser = await newUser.save();
    res.json(savedUser);
  };

  saveUser();
});

export default user;
