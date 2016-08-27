// Requires and Declarations
require('dotenv').config();

var express      = require('express'),
	app          = express(),
	watson       = require('watson-developer-cloud'),
	bodyParser   = require('body-parser'),
	conversation = require('./routes/conversation'),
	twilio       = require('./routes/twilio');

// Serve up static files
app.use(express.static(__dirname + '/public'));

// Include routers imported from /routes (conversation and twilio)
app.use('/conversation', conversation);
app.use('/twilio', twilio);

// Load public folder
app.get('/', function(req, res) {
	res.sendStatus(200);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('App listening on port %d', port )
});