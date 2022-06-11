const axios = require('axios');

const slackToken = 'xoxb-3225785419078-3286188532210-jS82ravJ0axw9vLwhnmCUkzI'; //Bot User OAuth Token
const url = 'https://slack.com/api/chat.postMessage';
exports.run = async(message, channel, username) => {
    axios.post(url, {
        channel: channel,
        text: message,
        username: username,
        icon_emoji: ':+1:'
    }, { headers: { authorization: `Bearer ${slackToken}` } });

    console.log('Done', res.data);
}