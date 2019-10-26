const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json({extended: false}));
app.use(cors());

app.use('/api/users', require('./api/users'));
app.use('/api/decks', require('./api/decks'));
app.use('/api/auth', require('./api/auth'));

const PORT = process.env.PORT || 5000;

connectDB();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'/build/index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on : ' + PORT);
})