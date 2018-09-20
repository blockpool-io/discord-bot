exports.run = (client, config, message, params) => {
  if (config.snapshots)
    message.channel.send({embed: {
    color: 3977445,
    title: "Download the latest snapshots here:",
    fields: [{
      name: "Mainnet",
      value: config.snapshots.mainnet
    },
    {
      name: "Testnet",
      value: config.snapshots.testnet
    }]
  }});
};

exports.conf = {
  "permlvl": 1
};

exports.help = {
  name: 'snapshots',
  description: 'shows the snapshot urls',
  usage: 'snapshots'
};
