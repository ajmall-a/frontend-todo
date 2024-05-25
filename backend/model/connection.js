// models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['ongoing', 'completed'],
    default: 'ongoing'
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
