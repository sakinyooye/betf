'use strict'; // ?
var mongoose = require('mongoose');
var Algos = mongoose.model('algorithmSchema');

exports.getAllAlgorithms = function(req, res) {
  Algos.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};





