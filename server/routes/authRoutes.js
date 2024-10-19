
const express = require('express');
const { registerUser, forgetPassword, resetPassword, loginUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forget-password', forgetPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
