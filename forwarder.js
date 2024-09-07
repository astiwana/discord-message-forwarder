const { Client, Presence } = require("discord.js-selfbot-v13");
const dotenv = require('dotenv');
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running");
});
dotenv.config();

const client = new Client();

const serverId = ''; 
const targetChannelId = '';
const destinationChannelId = '';

client.on('ready', () => {
  console.log(`🤖 Bot is online! Logged in as ${client.user.tag}`);

  client.user.setPresence({ status: 'invisible' });
});

client.on('messageCreate', async (message) => {
  if (message.guild && message.guild.id === serverId && message.channel.id === targetChannelId) {
    const content = message.content;
    const replyMessage = message.reference ? await message.channel.messages.fetch(message.reference.messageId) : null;
    const replyContent = replyMessage ? `\n\n🔗 **In reply to ${replyMessage.author.username}:**\n${replyMessage.content}\n======` : '';

    let messageContent = `🔔 **New Captured Message:**\n📬 **New Captured Message from ${message.author.username}**\n📨 **Message Content:**\n${content}${replyContent}`;

    const messageLink = `🔗 **Message Link:** ${message.url}`;
    messageContent += `\n${messageLink}\n=======`;

    const destinationChannel = await client.channels.fetch(destinationChannelId);
    destinationChannel.send(messageContent);
  }
});

client.login("token");