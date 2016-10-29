var current_reservations = require('current_tables.js');
var waitlist = require('waitlist.js');

module.exports = function(app) {

app.get('/get_tables', function(req,res) {
  res.json(current_reservations);
});

app.get('/get_waitlist', function(req,res) {
  res.json(waitlist);
});

app.post('/update_tables', function(req,res) {
  if (current_reservations.length < 5) {
    current_reservations.push(req.body);
    res.json(true);
  } else {
    waitlist.push(req.body);
    res.json(false);
  }
});



}
