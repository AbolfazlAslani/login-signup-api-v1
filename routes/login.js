const express = require('express');
const loginController = require('../controllers/loginController');
const router = new express.Router();

router.post('/login', loginController)

module.exports = router;