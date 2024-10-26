// /controllers/userController.js
const con = require('../connection');

//home page
exports.home = (req, res) => {
  
  res.status(201).json({ message: 'Welcome to homepage' });
 
};

// CREATE - Add a new user
exports.createUser = (req, res) => {
  const { username, email } = req.body;
  const sql = 'INSERT INTO user (username, email) VALUES (?, ?)';
  con.query(sql, [username, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User created', userId: result.insertId });
  });
};

// READ - Get all users
exports.getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM user';
  con.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// READ - Get a single user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM user WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(result[0]);
  });
};

// UPDATE - Update a user by ID
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  const sql = 'UPDATE user SET username = ?, email = ? WHERE id = ?';
  con.query(sql, [username, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated' });
  });
};

// DELETE - Delete a user by ID
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM user WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  });
};
