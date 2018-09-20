# BPL Discord Bot

This small discord bot allows to set and show URLs for the wallet and bootstraps. nodejs required.

## How to set the snapshot URLs

```
?setsnapshot <url> <mainnet|testnet>
```

## Commands 

```
?wallet // Displays the latest wallet URL
?snapshots // Displays the snapshot URLs
```

## Configuration

`config.json` holds all necessary configurations for the bot.

```javascript
{
  "token": "YOUR_BOT_TOKEN",
  "cmd_prefix": "?",
  "wallet": {
    "url": "WALLET_URL",
    "version": "WALLET_VERSION"
  },
  "snapshots": {
    "mainnet": "MAINNET_SNAPSHOT_URL",
    "testnet": "TESTNET_SNAPSHOT_URL"
  },
  "adminrolename": "Admin",
  "modrolename": "Mod",
  "configrolename": "Bot Admin"
 }
```

start the bot by typing `node bot.js`
