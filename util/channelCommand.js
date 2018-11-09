exports = (name, fn) => (client, config, message, params) => {
  if (message.channel.id !== config.price_channel.id) {
    const allowedChannelConfig = config[`${name}_channel`];
    const allowedChannels = Array.isArray(allowedChannelConfig) ? allowedChannelConfig : [allowedChannelConfig];
    const plural = acceptedChannels.length > 1 ? 's' : '';
    const allowedChannelText = allowedChannels.map(c => `#${c.name}`).join(', ');
    message.author.send(`The "${name}" command works only in the following channel${plural}: ${allowedChannelText}`);
    message.delete().catch(err => console.log(err));
    return;
  }

  return fn(client, config, message, params);
}
   