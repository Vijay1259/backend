const express = require('express');
const { signup, login } = require('../controllers/userController'); // Import the signup and login functions from userController.js
const router = express.Router();

// Define routes
router.post('/signup', signup); // Route for user signup
router.post('/login', login);   // Route for user login

// Export the router
module.exports= router;