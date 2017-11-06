'use strict'; // ?
var mongoose = require('mongoose');
var Algo = mongoose.model('algorithmSchema');

// get '/algos'
exports.getAllAlgorithms = function(req, res) {
  Algo.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
}; 

// post '/algos'
exports.addAlgorithm = function(req, res) {
	// this will take in a body that has a prompt, summary, pointValue, 
	// required level and testing suite.
  var newAlgo = new Algo(req.body);
  newAlgo.save(function(err, task) {
    if (err) {res.send(err)};
    res.send(newAlgo);
  });
} 

// get '/algos/:id'
exports.getSpecifiedAlgorithm = function(req, res) {
	Algo.findById(req.params.id, function(err, task) {
    if (err) {res.send(err)};
    res.send(task);
  });
}

// put '/algos/:id'
exports.updateSubmissionHistoryOfAlgorithm = async (req, res) => {
	// this will take in a submission history organized by <username, time, 
	// success status> and store it in the algo schema. 
	var oldAlgorithm = await Algo.findById(req.params.id) 
	var newSubmission = req.body.submissionHistory
	oldAlgorithm.submissionHistory.push(newSubmission)
	res.send(oldAlgorithm)
}

// delete '/algos/:id'
exports.deleteAlgorithm = (req, res) => {
	Algo.remove(
		{id : req.params.id}, 
		(err, algo) => {
			if (err) {res.send(err)}
		}) else {
		res.send(`${algo} successfully deleted`)
	}
};


