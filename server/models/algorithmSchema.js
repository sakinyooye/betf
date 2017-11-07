'use strict'; // right?
var mongoose = require('mongoose');
var db = require('../server.js')

var Schema = mongoose.Schema;

var algorithmSchema = new Schema({
  name: {
    type: String, 
    requred: true, 
  }, 

  prompt: {
    type: String, 
  },  

  seedCode: {
    type: String,
    default: "\/\/ your code here"
  }, 

  // will need to use gridFS for this if the profile
  // pictures are going to be larger than 16mb in size. 
  // need to do more research to see if this will actually work. 
  testingSuite: {
    type: String,  
  }, 

  // skeleton for submissionHistory: 

  submissionHistory: {
    type: Array, 
    default: [], 
  }, 

});

mongoose.model('algorithmSchema', algorithmSchema);