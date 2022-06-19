require('dotenv').config();

const { Client, Intents } = require('discord.js');
const { getMessageFunctionByMessage } = require('./src/events');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); });

client.on('messageCreate', createdMessage => {
    const messageFunction = getMessageFunctionByMessage(createdMessage);

    if (!messageFunction) {
        return;
    }

    messageFunction()
});

client.login(process.env.CLIENT_TOKEN);