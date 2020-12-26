const SlackBot = require('slackbots');
const axios = require('axios');
var channel = "TLVHX6ZA7";

const bot = new SlackBot({
   
    // token: 'xoxp-709609237347-721045440309-808210675427-2aa6ce12db5e836afaddef31c727a534', //OAuth Access Token
    token: 'xoxb-709609237347-811768081457-HXBBmKWG7CSYgmYSK8SVtQgR', //Bot User OAuth Access Token
    name:'chadwick'
});

//Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    };
    console.log("Attempting to speak with no mouth...");
    bot.postMessage(channel, 'I\'m heading to the kitchen. Does anybody want anything?');
    // bot.postMessageToChannel(channel, 'I\'m heading to the kitchen. Does anybody want anything?');
    console.log("I must scream");
});

//Error Handler
bot.on('error', (err) => console.log(err));

//Message Handler
bot.on('message', (data) => {

    if(data.type !== 'message'){
        return;
    }

    console.log(data);

    handleMessage(data.text);

});

//Respond to Data
function handleMessage(message){
    if(message.includes('?')){
        bot.postMessageToChannel(channel, '@Brady, care to weigh in here?');
    }
}