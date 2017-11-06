'use strict'; // right?
var mongoose = require('mongoose');
var db = require('../../server.js')

var Schema = mongoose.Schema;

var gameSchema = new Schema({
  playerScores: {
    type: Number, 
  }, 

  participants: {
    type: Array,
  },

  leaderboard: {
    type: Array,
  },

  pointWorth: {
    type: Number, 
  },  
  
  pointCost: {

  }, 
  // active, completed, 
  status : {

  }, 

  algorithm : {

  }, 
});

mongoose.model('userSchema', userSchema);