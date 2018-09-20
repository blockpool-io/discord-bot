const fs = require("fs");

exports.run = (client, config, message, params) => {
  if (params.length == 2) {
    const nettype = params.shift().toLowerCase();
    const url = params.shift().toLowerCase();

    config.snapshots[nettype] = url
    
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => console.error);

    message.author.send(`You succesfully changed the ${nettype} snapshot URL to ${url}`);
  }

  message.delete().catch(err => console.log(err));
};

exports.conf = {
  "permlvl": 2
};

exports.help = {
  name: 'setsnapshot',
  description: 'sets new snapshot url',
  usage: 'setsnapshot <url> <mainnet|testnet>'
};
