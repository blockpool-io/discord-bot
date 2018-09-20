# BPL Discord Bot

<p align="center">
    <img src="./banner.png" />
</p>

[![License: MIT](https://badgen.now.sh/badge/license/MIT)](https://opensource.org/licenses/MIT)

## Commands 

```
?wallet // Displays the latest wallet URL
?snapshots // Displays the snapshot URLs

?setsnapshot <url> <mainnet|testnet> // Setter for the snapshot URLs

?say <text> // Sends <text> through the bot
```

## Configuration

`config.json` holds all necessary configurations for the bot.

```javascript
{
  "token": "YOUR_BOT_TOKEN",
  "cmd_prefix": "?",
  "wallet": {
    "gh_username": "GITHUB_USERNAME",
    "gh_reponame": "GITHUB_REPOSITORY_NAME"
  },
  "snapshots": {
    "mainnet": "MAINNET_SNAPSHOT_URL",
    "testnet": "TESTNET_SNAPSHOT_URL"
  },
  "adminrolename": "ADMIN_ROLE",
  "modrolename": "MODERATOR_ROLE",
  "configrolename": "BOT_ADMIN_ROLE"
}
```

start the bot by typing `node bot.js` or with forever by typing `forever start bot.js`

## Authors
- [Edgar Goetzendorff](https://github.com/dated)
- [All Contributors](../../contributors)

## License
[MIT](LICENSE) © [Blockpool](https://blockpool.io)
