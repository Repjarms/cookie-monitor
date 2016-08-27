require('dotenv').config();

var express = require('express'),
	router  = express.Router();


router.get('/', function(req, res) {
	res.send('This is a test of routing');
});

router.get('/another', function(req, res) {
	res.send('This is about another');
});

module.exports = router;