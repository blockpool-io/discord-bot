const fetch = require('node-fetch');
const command = require('../util/channelCommand')

exports.run = command('height', (client, config, message, params) => {
  fetch(`http://13.56.163.57:9031/api/getLastBlocks`)
    .then(response => response.json())
    .then(data => {
      const latestBlock = data.blocks[0]
      message.channel.send(`Current block height is ${latestBlock.height}`);
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
