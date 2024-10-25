// /routes/crud.js
const express = require('express');
const router = express.Router();
const con = require('../connection'); // import the db connection

// CREATE operation - Add a new user
router.post('/user', (req, res) => {
  const { username, email } = req.body;
  const sql = 'INSERT INTO user (username, email) VALUES (?, ?)';
  con.query(sql, [username, email], (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      return res.status(500).send('Error inserting user');
    }
    res.send('User added successfully');
  });
});

// READ operation - Get all users
router.get('/users', (req, res) => {
  const sql = 'SELECT * FROM user';
  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data: ", err);
      return res.status(500).send('Error fetching users');
    }
    res.json(results);
  });
});

// UPDATE operation - Update a user by ID
router.put('/user/:id', (req, res) => {
  const { username, email } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE user SET username = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
  con.query(sql, [username, email, id], (err, result) => {
    if (err) {
      console.error("Error updating data: ", err);
      return res.status(500).send('Error updating user');
    }
    res.send('User updated successfully');
  });
});

// DELETE operation - Delete a user by ID
router.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM user WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data: ", err);
      return res.status(500).send('Error deleting user');
    }
    res.send('User deleted successfully');
  });
});

module.exports = router;
