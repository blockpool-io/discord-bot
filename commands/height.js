const fetch = require('node-fetch');
const command = require('../util/channelCommand')

exports.run = command('height', (client, config, message, params) => {
  fetch(`https://s01.mc.blockpool.io/api/getHeight`)
    .then(response => response.json())
    .then(data => {
      const height = data.height
      message.channel.send(`Current block height is ${height}`);
    })
    .catch(error => console.error(error))
});

exports.conf = {
  'permlvl': 0
};

exports.help = {
  name: 'height',
  description: 'gets the current block height of the chain',
  usage: 'height'
};
