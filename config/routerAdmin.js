const express = require('express');
var router = express.Router();
var adminController = require('../app/controllers/adminController');

router.get('/', function(req, res) {
    adminController.index(req, res);
})

router.get('/login', function(req, res) {
    adminController.login(req, res);
})

module.exports = router;