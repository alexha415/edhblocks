const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

app.use(express.json({extended: false}));
app.use(cors());
app.use('/api/users', require('./api/users'));
app.use('/api/decks', require('./api/decks'));
app.use('/api/auth', require('./api/auth'));

const PORT = process.env.PORT || 5000;

connectDB();
app.get('/', (req,res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log('Listening on : ' + PORT);
})