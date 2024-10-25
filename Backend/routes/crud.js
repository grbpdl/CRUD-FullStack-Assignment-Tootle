// /routes/crud.js
const express = require('express');
const router = express.Router();
const con = require('../connection');

// CREATE - Add a new user
router.post('/user', (req, res) => {
  const { username, email } = req.body;
  const sql = 'INSERT INTO user (username, email) VALUES (?, ?)';
  con.query(sql, [username, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User created', userId: result.insertId });
  });
});

// READ - Get all users
router.get('/users', (req, res) => {
  const sql = 'SELECT * FROM user';
  con.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// READ - Get a single user by ID
router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM user WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(result[0]);
  });
});

// UPDATE - Update a user by ID
router.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  const sql = 'UPDATE user SET username = ?, email = ? WHERE id = ?';
  con.query(sql, [username, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated' });
  });
});

// DELETE - Delete a user by ID
router.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM user WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  });
});

module.exports = router;
