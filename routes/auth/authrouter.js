var express = require('express');
const AuthenticationController = require('../../controller/authentication/authenticationcontroller');
var Authrouter = express.Router();

Authrouter.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Login' });
});
Authrouter.post('/submitLogin',async function(req, res, next) {
  let result = await AuthenticationController.login(req,res);
  res.send(result);
});
module.exports = Authrouter;