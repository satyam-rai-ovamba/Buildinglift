var express = require('express');
const ConfigController = require('../../controller/config/configcontroller');
var Configrouter = express.Router();

Configrouter.get('/', function(req, res, next) {
  res.render('config/config', { title: 'Config Settings' });
});
Configrouter.get('/getAllConfig',async function(req, res, next) {
  let result = await ConfigController.getAllConfig(req);
  res.send(result);
});
Configrouter.post('/updateSingleConfig',async function(req, res, next) {
  let result = await ConfigController.updateSingleConfig(req,res);
  res.send(result);
});
module.exports = Configrouter;