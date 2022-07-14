const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '7529Wish',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();
// xpress middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
});
app.use((req, res) => {
    res.status(404).end();
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});