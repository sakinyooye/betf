'use strict'; // ?
var mongoose = require('mongoose');
var Games = mongoose.model('gameSchema');


// 'get /games' 
exports.getAllGames = function(req, res) {
  Games.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};