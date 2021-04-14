const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');
const requireAdminLogin = require('../utils/requireAdminLogin');

var router = express.Router();

router.post('', requireAdminLogin, controller.createProduct);
router.get('', controller.fetchAllProduct);
router.get('/:id', controller.fetchProduct);
router.put('/:id', requireAdminLogin, controller.updateProduct);

module.exports = router;