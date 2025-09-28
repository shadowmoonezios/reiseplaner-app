const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Updated to use built-in express.json()

// Database connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/reiseplaner';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: true, /* Add following option to prevent deprecation warnings */ useFindAndModify: false })
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Reiseplaner app API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});