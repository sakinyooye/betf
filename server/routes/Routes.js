'use strict'; // ?
module.exports = function(app) {
  var user = require('../controllers/userController.js');
  var game = require('../controllers/gameController.js');
  var algorithms = require('../controllers/algorithmController.js');
  // routes for game:
  app.get('/users', user.getAllUsers)
  app.post('/users', user.addAUser);

  app.put('/users/:username', user.updateUser)

  // routes for games:
  app.get('/games', game.getAllGames)
  app.post('/games', game.addAGame);

  app.put('/games/:id', game.updateGame)

  // routes algorithms: 
  app.get('/games', game.getAllAlgorithms)
  app.post('/games', game.addAlgorithm);

  app.put('/games/:id', game.updateAlgorithm)
  
};