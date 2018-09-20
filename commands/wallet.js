exports.run = (client, config, message) => {
  message.delete().catch(err => console.log(err));

  if (config.wallet) {
    fetch(`https://api.github.com/${config.wallet.gh_username}/${config.wallet.gh_reponame}/releases/latest`)
      .then(response => response.json())
      .then(release => {
        console.log(release.html_url)
        console.log(release.name)

        message.channel.send({embed: {
          color: 3977445,
          title: `Download the latest wallet (${release.name}) here:`,
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
