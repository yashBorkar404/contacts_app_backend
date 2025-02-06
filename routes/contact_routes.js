const express = require('express');
const router = express.Router();
const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController');
const validateTokenHandler = require('../middleware/validateTokenHandler');
router.use(validateTokenHandler);
router.route('/').get((getContacts)).post((createContact));
router.route('/:id').get((getContact)).put((updateContact)).delete((deleteContact));
module.exports = router;