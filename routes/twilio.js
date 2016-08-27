var express    = require('express'),
	router     = express.Router(),
	bodyParser = require('body-parser'),
	twilio     = require('./modules/twilio_modules');


// bodyParser middleware
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Temporary route to test twilio
router.get('/test', function(req, res) {
	twilio.message('test');
	res.sendStatus(200);
});

// Callback endpoint for Twilio TwiML application
router.post('/reply', function(req, res) {
	if (!req.body) return res.sendStatus(400);

	//twilio.message(req.body.id);
	console.log(req.body.id);
	res.sendStatus(200);	
});

module.exports = router;