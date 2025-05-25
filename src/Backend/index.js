const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // put your MySQL password here if you have one
  database: 'pedestrian_app'
});

app.post('/feedback', (req, res) => {
  const { sign, comment } = req.body;
  const query = 'INSERT INTO feedback (sign, comment) VALUES (?, ?)';
  db.query(query, [sign, comment], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Feedback saved' });
  });
});

app.get('/feedback', (req, res) => {
  db.query('SELECT * FROM feedback ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
