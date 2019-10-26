const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json({extended: false}));
app.use(cors());


app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/users', require('./api/users'));
app.use('/api/decks', require('./api/decks'));
app.use('/api/auth', require('./api/auth'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log('Listening on : ' + PORT);
})