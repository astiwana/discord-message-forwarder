const { Client, Presence } = require("discord.js-selfbot-v13");
const dotenv = require('dotenv');
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running");
});
dotenv.config();

const client = new Client();

const serverId = 'server_id'; // Server where messages are being captured

// Map target channels to destination channels
const channelMapping = {
    'target_channel_1': 'destination_channel_1',  // Target Channel 1 -> Destination Channel 1
    'target_channel_2': 'destination_channel_2',  // Target Channel 2 -> Destination Channel 2
    'target_channel_3': 'destination_channel_3',  // Target Channel 3 -> Destination Channel 3
    // Add more channels here if needed
  };

client.on('ready', () => {
  console.log(`🤖 Bot is online! Logged in as ${client.user.tag}`);

  client.user.setPresence({ status: 'invisible' });
});

client.on('messageCreate', async (message) => {
    if (message.guild && message.guild.id === serverId && channelMapping[message.channel.id]) {
      const content = message.content;
      const replyMessage = message.reference ? await message.channel.messages.fetch(message.reference.messageId) : null;
      const replyContent = replyMessage ? `\n\n🔗 **In reply to ${replyMessage.author.username}:**\n${replyMessage.content}\n======` : '';
  
      let messageContent = `🔔 **New Captured Message:**\n📬 **New Captured Message from ${message.author.username}**\n📨 **Message Content:**\n${content}${replyContent}`;
  
      const messageLink = `🔗 **Message Link:** ${message.url}`;
      messageContent += `\n${messageLink}\n=======`;
  
      // Fetch the destination channel based on the mapping
      const destinationChannelId = channelMapping[message.channel.id];
      const destinationChannel = await client.channels.fetch(destinationChannelId);
      
      if (destinationChannel) {
        destinationChannel.send(messageContent);
      } else {
        console.error(`Destination channel not found for channel ID: ${message.channel.id}`);
      }
    }
  });
  
  client.login("token");