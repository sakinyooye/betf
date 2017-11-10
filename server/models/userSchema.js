'use strict'; // right?

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String, 
    required: true, 
    index : {
      unique: true      
    }
  }, 

  // this is stored as a bcrypt hash. See userController for details. 
  password: {
    type: String,
    required: true
  },

  // people start out with 100 totalPoints, but this is decremented as they 
  // play games and incremented as they win games. 
  totalPoints: {
    type: Number, 
    default : 100
  }, 

  // TODO: update level based on gameHistory.length? 
  level: {
    type: Number, 
    default: 1, 
  }, 

  // will need to use gridFS for this if the profile
  // pictures are going to be larger than 16mb in size. 
  // need to do more research to see if this will actually work. 
  profilePicture: {
    data: Buffer, 
    contentType: String 
  }, 

  // TODO: append to this onClick of submit button. 
  gameHistory: {
    type: Array, 
    default: []
  }, 
});



mongoose.model('userSchema', userSchema);