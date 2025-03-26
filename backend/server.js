require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // This allows us to receive JSON data
app.use('/api/posts', postsRouter);

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello from blogging platform!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

