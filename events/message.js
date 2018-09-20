const config = require("../config.json");

module.exports = message => {
  const client = message.client;

  if (message.author.bot || !message.content.startsWith(config.cmd_prefix)) return;
  const command = message.content.split(' ')[0].slice(config.cmd_prefix.length);
  const params = message.content.split(' ').slice(1);

  const perms = client.elevation(message);

  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  }

  if (cmd) {
    if (perms < cmd.conf.permlvl) return;
    cmd.run(client, config, message, params);
  }
};
