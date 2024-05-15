/* eslint-disable import/no-named-as-default */
import sha1 from 'sha1';
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

const sha1 = require('sha1');
const User = require('../models/User');

const UsersController = {
  postNew: async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Already exist' });
    }

    const hashedPassword = sha1(password);
    const newUser = new User({ email, password: hashedPassword });

    try {
      await newUser.save();
      return res.status(201).json({ email: newUser.email, id: newUser._id });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = UsersController;

