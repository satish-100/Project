// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Welcome to the MERN CRUD API');
//   });
  
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define routes
app.use('/api', require('./routes/itemRoutes'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
