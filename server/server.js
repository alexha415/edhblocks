const express = require('express');
const connectDB = require('./config/db');
const app = express();

app.use(express.json({extended: false}));
app.use('/api/users', require('./api/users'));
const PORT = process.env.PORT || 5000;

connectDB();
app.get('/', (req,res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log('Listening on : ' + PORT);
})