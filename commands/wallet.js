const fetch = require("node-fetch");

exports.run = (client, config, message) => {
  message.delete().catch(err => console.log(err));

  if (config.wallet) {
    fetch(`https://api.github.com/repos/${config.wallet.gh_username}/${config.wallet.gh_reponame}/releases/latest`)
      .then(response => response.json())
      .then(release => {
        message.channel.send({embed: {
          color: 3977445,
          title: `Download the latest wallet (v${release.tag_name}) here:`,
          description: release.html_url
        }});
      })
      .catch(error => console.error(error))
  }
};

exports.conf = {
  "permlvl": 1
};

exports.help = {
  name: 'wallet',
  description: 'shows the wallet url',
  usage: 'wallet'
};
