'use strict'; // ?
var mongoose = require('mongoose');
var Algos = mongoose.model('algorithmSchema');

exports.getAllAlgorithms = function(req, res) {
  Algos.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
}; 

exports.addAlgorithm = function(req, res) {
	// this will take in a body that has a prompt, summary, pointValue, 
	// required level and testing suite.
	var algorithm = req.body; 
	res.send(algorithm) 
} 

exports.updateSubmissionHistoryOfAlgorithm = function(req, res) {
	// this will take in a submission history organized by <username, time, 
	// success status> and store it in the algo schema. 

}



