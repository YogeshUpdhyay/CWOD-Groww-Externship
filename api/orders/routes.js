const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');
const requireAdminLogin = require('../utils/requireAdminLogin');

var router = express.Router();

router.get('/:id', requireLogin, controller.getOrder);
router.get('/', requireLogin, controller.getAllOrder);
router.post('/', requireLogin, validator.palceOrderPostInValidator, controller.placeOrder);
router.put('/:id', requireAdminLogin, validator.updateOrderStatusValidator, controller.updateOrderStatus);

module.exports = router;