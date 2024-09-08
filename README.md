# Discord Message Relaying Selfbot
 
This selfbot enables seamless communication between two Discord servers using an alternate account. By setting up the selfbot on your alternate account, it will automatically forward messages from specified channels in one server to a different server where your main account is present. You can then respond to these relayed messages from your main account, and the selfbot will send your replies back to the original server, ensuring two-way communication across both servers.

## Installation

1. First, fork this repository and clone it to your computer.
2. Navigate to the directory and install the required packages:

   ```bash
   npm install discord.js-selfbot-v13 dotenv express
   ```
3. Add in your token, user ID, target channel(s), destination channel(s), and the server ID of the target channel(s).
4. Execute the selfbot:

   ```bash
   node forwarder.js
   ```

## Contributing

To contribute to this repository, feel free to make a pull request and I will try my best to review it soon.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
