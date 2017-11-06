'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('userSchema');


// 'get /stores' //tested
exports.getAllUsers = function(req, res) {
  Users.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};


exports.addAUser = function(req, res) {

}; 

exports.getSpecificUserData = function(req, res) {

}; 

exports.updateUser = function(req, res) {
	
}
