var request = require('request');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
// not currently using any of these. 

// these are essentially the same as the utility functions in app/public/lib/utility.js
// app/models/user.js files from the hrnyc11-shortly-express repo.  

exports.isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next){
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      // should replace this redirect with 
      res.redirect('/');
    });
};

// changed this so that userBody could be passed in as an argument. 
exports.comparePassword = function(userBody, attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, userBody.get('password'), function(err, isMatch) {
    if (err) console.error('there was an error in the comparePassword util. It reads: ', err)
    callback(isMatch);
  });
}











