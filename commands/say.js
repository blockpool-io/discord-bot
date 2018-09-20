exports.run = (client, config, message, args) => {
  let text = args.join(" ");
  
  message.delete().catch(err => console.log(err));
  
  if (text.length) {
    message.channel.send(text);
  }
};

exports.conf = {
  "permlvl": 1
};

exports.help = {
  name: 'say',
  description: 'sends some text through the bot',
  usage: 'say <text>'
};
