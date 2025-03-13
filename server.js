const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

const PORT = process.env.PORT || 5001;

// 👉 Middleware to parse JSON body
app.use(express.json());

// 👉 Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/task-manager')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 👉 Use the task routes
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
