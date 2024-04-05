// routes/itemRoutes.js

const express = require('express')
const bcrypt = require('bcrypt');;
const router = express.Router();
const jwt = require('jsonwebtoken');
const Item = require('../models/Item');
const User = require('../models/User');

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create an item
router.post('/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an item
router.patch('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (req.body.name != null) {
      item.name = req.body.name;
    }
    if (req.body.description != null) {
      item.description = req.body.description;
    }

    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.remove();
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/signup', async (req, res) => {
  console.log(req.body)
  const hashPassword = await bcrypt.hash(req.body.password, 10)
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  }
  catch (error) {
    console.error('Error occurred while saving user:', error);
    res.status(500).json({ message: 'Failed to signup user' });
  }

})

router.post('/login', async (req, res) => {
  try {
    // Retrieve the user from the database based on the provided email
    const user = await User.findOne({ email: req.body.email });
console.log("user",user)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the hashed password stored in the database with the provided password using bcrypt
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    console.log("passwordMatch",passwordMatch)
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a token for authentication
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    console.log(token)
    res.status(200).json({ token }); // Respond with the token
  } catch (error) {
    console.error('Error occurred while logging in user:', error);
    res.status(500).json({ message: 'Failed to login user' });
  }
});

module.exports = router;
