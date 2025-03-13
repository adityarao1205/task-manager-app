const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true // Automatically creates `createdAt` and `updatedAt` fields
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
