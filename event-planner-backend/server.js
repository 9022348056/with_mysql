const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Replace with your MySQL username
  password: 'Vaish1210',        // Replace with your MySQL password
  database: 'event_planner'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Routes
app.get('/events', (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) {
      console.error('Error fetching events: ', err);
      res.status(500).send('Error fetching events');
    } else {
      res.json(results);
    }
  });
});

app.post('/events', (req, res) => {
  const { title, description, date } = req.body;
  const query = 'INSERT INTO events (title, description, date) VALUES (?, ?, ?)';
  db.query(query, [title, description, date], (err, results) => {
    if (err) {
      console.error('Error adding event: ', err);
      res.status(500).send('Error adding event');
    } else {
      res.status(201).json({
        id: results.insertId,
        title,
        description,
        date
      });
    }
  });
});

// Delete event by name
app.delete('/events/:name', (req, res) => {
  const { name } = req.params;
  
  // Use raw SQL query to delete event by name
  const query = 'DELETE FROM events WHERE title = ?';
  
  db.query(query, [name], (err, results) => {
    if (err) {
      console.error('Error deleting event: ', err);
      res.status(500).send('Error deleting event');
    } else {
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.sendStatus(204); // Successfully deleted
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
