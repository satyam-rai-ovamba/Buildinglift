var express = require('express');
var Dashboardrouter = express.Router();

Dashboardrouter.get('/dashboard', function(req, res, next) {
  res.render('dashboard/dashboard', { title: 'Dashboard' });
});

module.exports = Dashboardrouter;