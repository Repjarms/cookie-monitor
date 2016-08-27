require('dotenv').config();

// Twilio Credentials 
var accountSid = process.env.TWILIO_ACCOUNTSID; 
var authToken = process.env.TWILIO_AUTHTOKEN; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

module.exports = {
	
	message: function(text) {

		client.messages.create({ 
	    to: "+12817974636", 
	    from: process.env.TWILIO_NUMBER, 
	    body: text,  
		}, function(err, message) { 
	    	console.log(message.sid); 
		});

	}

};