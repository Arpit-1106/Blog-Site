// Import mongoose
const mongoose = require('mongoose');

// Define the schema (structure of your blog posts)
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required'], // Makes this field mandatory
    trim: true // Removes whitespace from both ends
  },
  content: {
    type: String,
    required: [true, 'Post content is required']
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  }
}, { 
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the model from the schema
const Post = mongoose.model('Post', postSchema);

// Export the model to use it in other files
module.exports = Post;