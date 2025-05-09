const express = require('express');
const router = express.Router();
const { currentUser, registerUser, loginUser } = require('../controllers/userController');
const  validateTokenHandler  = require('../middleware/validateTokenHandler');
router.route('/register').post(registerUser)

router.route('/login').post(loginUser)
router.route('/current').get(validateTokenHandler, currentUser);
module.exports = router;