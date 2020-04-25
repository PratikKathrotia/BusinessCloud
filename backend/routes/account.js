const express = require('express');

const AccountController = require('../controllers/account');
const router = express.Router();

router.post('', AccountController.createAccount);

module.exports = router;
