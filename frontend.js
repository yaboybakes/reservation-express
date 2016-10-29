var path = require('path');

module.exports = function(app) {
  app.get('/reservations', function(req,res) {
    res.sendFile(path.join(__dirname + '/reservations.html'));
  });

  app.get('/tables', function(req,res) {
    res.sendFile(path.join(__dirname + '/tables.html'));
  });

  //default
  app.use(function(req,res) {
    res.sendFile(path.join(__dirnaem + '/home.html'));
  });
}
