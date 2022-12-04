const express = require('express');
const userControllers = require('../controllers/userController');

const router = express.Router();

router.route('/alluser').get(userControllers.getAllUser);

module.exports=router;