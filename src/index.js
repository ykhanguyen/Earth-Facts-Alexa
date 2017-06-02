'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Earth Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Earth is the only planet in the solar system that has life.",
    "Earth is the only planet that has liquid water on its surface.",
    "The Earth is the only inner planet (Mercury, Venus, Earth and Mars) to have one large satellite, the Moon.  Mars has two very tiny moons.  Mercury and Venus have none.",
    "The Earth is fragile.  Its surface is split into plates (tectonic plates) which float on a rocky mantle – the layer between the surface of the earth, its crust, and its hot liquid core.  The inside of the Earth is active and earthquakes, volcanoes and mountain building takes place along the boundaries of the tectonic plates. ",
    "The Earth is 93 million miles, or 150 million kilometres from the Sun.",
    "The Earth’s diameter, the distance round its middle at the Equator, is 7928 miles, or 12760 kilometres.",
    "The Earth differs from all the other planets because it has such a wide diversity of life and intelligent beings.  This has only been possible because of the Earth’s atmosphere which has protected the Earth and allowed life to flourish.",
    "As the Earth orbits round the Sun it tilts very slightly and so gives us the seasons.  When the Earth has tilted so that the northern half of the Earth is a little away from the Sun, the northern hemisphere (meaning half of the Earth’s sphere) has winter."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};