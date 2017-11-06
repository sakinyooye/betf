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

exports.addAGame = function(req, res) {
  Games.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  })
};

// app.post("/addname", (req, res) => {
//   var myData = new Games(req.body);
//   myData.save()
//   .then(item => {
//   res.send("item saved to database");
//   })
//   .catch(err => {
//   res.status(400).send("unable to save to database");
//   });
//  });

exports.updataGame = function(req, res) {
  Games.find({}, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  })
}