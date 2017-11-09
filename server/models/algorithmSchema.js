'use strict'; // right?
var mongoose = require('mongoose');
var db = require('../server.js')

var Schema = mongoose.Schema;

var algorithmSchema = new Schema({
  name: {
    type: String, 
    required: true, 
  }, 

  prompt: {
    type: String, 
  },  

  seedCode: {
    type: String,
    default: "\/\/ your code here"
  }, 

  functionName: {
    type: String, 
    required: true, 
  }, 

  testingSuite: {
    type: String,  
  }, 

  submissionHistory: {
    type: Array, 
    default: [], 
  }, 

});

mongoose.model('algorithmSchema', algorithmSchema);