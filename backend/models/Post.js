
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required'], 
    trim: true 
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
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;