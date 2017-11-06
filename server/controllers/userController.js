'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('storeSchema');


// 'get /stores' //tested
exports.listAllUsers = function(req, res) {
  Users.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};


exports.addAUser = function(req, res) {




}; 



