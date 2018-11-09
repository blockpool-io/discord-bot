module.exports = (name, fn) => (client, config, message, params) => {
  const allowedChannels = config[`${name}_channels`];

  const allowedChannelIDs = allowedChannels.map(c => c.id);
  const allowedChannelNames = allowedChannels.map(c => c.name);

  if (allowedChannelIDs.indexOf(message.channel.id) == -1) {
    const plural = allowedChannelNames.length > 1 ? 's' : '';
    const names = allowedChannelNames.map(name => `#${name}`).join(', ');
    message.author.send(`The "${name}" command works only in the following channel${plural}: ${names}`);
    message.delete().catch(err => console.log(err));
    return;
  }

  return fn(client, config, message, params);
}
