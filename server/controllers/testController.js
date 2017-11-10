//The primary purpose of this controller is to respond to post requests against the '/test' route/endpoint.
//Post requests to this endpoint are performed when a user submits their code for evaluation to determine if they passed the corresponding tests

var jsStringEscape = require('js-string-escape')
var mongoose = require('mongoose');
var Algo = mongoose.model('algorithmSchema');
var fs = require('fs');
var bubbleSort = require('../data/bubblesort.js');
var cmd=require('node-cmd');


//Function to write the mocha tests (test.js) for a given game to a 'data' folder on the server.
function writeTestToFile (test, functionName){
	/*The below line adds necessary 'require' statements that are necessary to execute the mocha tests. 
	This includes mocha, chai, and the js file for the code submission by the user */
	fs.writeFileSync('./data/test.js',`var ${functionName} = require('./submission.js').${functionName};\nvar chai = require('chai'); \nvar mocha = require('mocha');\n`)
	fs.appendFileSync('./data/test.js', test);
	console.log('The Test file has been saved!');
}

//Function to write the user code submission (submission.js) for a given game to a 'data' folder on the server.
function writeSubmissionToFile(submission, functionName){
	/*The below line adds an exports statement to the submission file, so that the code can be tested by the tests in test.js. 
	This includes mocha, chai, and the js file for the code submission by the user */
	fs.writeFileSync('./data/submission.js', `module.exports.${functionName}=`);
	fs.appendFileSync('./data/submission.js', submission);
	console.log('The Submission file has been saved!');
}

//Function to handle a request to evaluate a user code submission against the tests for the corresponding algorithm
exports.getSubmissionEvaluation = function(req,res){

	/*var submission = bubbleSort.bubbleSort.func
	var functionName = 'bubbleSort';*/

	console.log(req);

	//pulling data off of request body
	var submission = req.body.value;
	var test = req.body.tests;
	var algoId = req.body.algo;

	console.log('ALGO ID: ' + algoId);
	console.log('test: ' +  test);
	console.log('submission: ' + submission);

	//Using the algo ID from the request, we get the function name, call functions to write the test and submission files, and run the mocha executable against the tests for the algorithm (along with the user code submission)
	Algo.findById(algoId, (err, algo) => {
		if (err) throw(err); 
		var functionName = algo.functionName;
		//var test = allAlgos[0].testingSuite;//TO REMOVE ONCE values are available off of req.body

		writeTestToFile(test, functionName);
		writeSubmissionToFile(submission, functionName);

		
		/*given that the server is running in the server folder, 
		we change directory to the data folder and run mocha
		Pre-requisite: Mocha must be installed globally in order for this to work
		("npm install -g mocha").
		*/
		cmd.get('cd data && mocha', function(err, data, stderr){
			console.log("DATATATAT", data)

			//Reg Ex to find the number of tests that are passing and failing;
			var passing = data[/passing/.exec(data).index - 2];
			var failing = data[/failing/.exec(data).index - 2];

			//create object to return back for the post request
			var returnObj = {'passing': passing, 
							 'failing': failing,
							 'testResults': data //this is a printout from mocha with the details of the passing and failing tests
							}

            res.send(returnObj);
        });
	});

}