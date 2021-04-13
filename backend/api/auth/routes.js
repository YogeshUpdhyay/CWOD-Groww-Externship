const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const requireLogin = require('../utils/requirelogin');

var router = express.Router();
// validator.loginValidation
router.post('/register', validator.registerValidation, controller.regsiterUser);
router.post('/login',  validator.loginValidation, controller.loginUser);
router.post('/logout', controller.logoutUser);
router.get('/kyc', requireLogin, controller.updateKycStatus);

module.exports = router;