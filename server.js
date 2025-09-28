const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Datenbankverbindung
mongoose.connect('mongodb://localhost:27017/reiseplaner', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error(err));

// Routen
app.get('/', (req, res) => {
  res.send('Willkommen zur Reiseplaner-App API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});