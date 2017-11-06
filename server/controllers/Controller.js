'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('storeSchema');


// 'get /stores' //tested
exports.listAllStores = function(req, res) {
  Store.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};

// post '/stores' //tested
// exports.createNewStore = function(req, res) {

// };

// // 'get /stores/:id'
// exports.readOneStore = function(req, res) {

// };

// // 'put /stores/:id'
// exports.updateStore = function(req, res) {

// };

// // get '/stores/near'
// exports.findNearbyStores = function(req, res) {

// }




