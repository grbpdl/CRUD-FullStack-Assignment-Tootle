// /routes/crud.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/opreations');


//home route for backend
router.get('/',userController.home)

// Route for creating a new user
router.post('/user', userController.createUser);

// Route for getting all users
router.get('/users', userController.getAllUsers);

// Route for getting a user by ID
router.get('/user/:id', userController.getUserById);

// Route for updating a user by ID
router.put('/user/:id', userController.updateUser);

// Route for deleting a user by ID
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
