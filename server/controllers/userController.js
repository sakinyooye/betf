'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('userSchema');


// get '/users'
exports.getAllUsers = function(req, res) {
  Users.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};

// post
exports.addAUser = function(req, res) {
	// this will take in a body that has a username and password. 
  var newAlgo = new Algo(req.body);
  newAlgo.save(function(err, task) {
    if (err) {res.send(err)};
    res.send(newAlgo);
  });
}; 

// get '/users/:username'
exports.getSpecificUserData = function(req, res) {

}; 


// put '/users/:username'
exports.updateUserData = function(req, res) {
	// this will be used on the profile page for users to update a user's profile 
	// with a profile picture

}
