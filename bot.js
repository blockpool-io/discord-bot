const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const fs = require("fs");
const config = require("./config.json");

require('./util/eventloader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  
  files.forEach(f => {
    const props = require(`./commands/${f}`);

    log(`Loading command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
  });
});

client.elevation = message => {
  let permlvl = 0;

  const config_role = message.guild.roles.find('name', config.modrolename);

  if (mod_role && message.member.roles.has(mod_role.id)) {
    permlvl = 1;
  }

  const config_role = message.guild.roles.find('name', config.configrolename);

  if (config_role && message.member.roles.has(config_role.id)) {
    permlvl = 2;
  }

  const admin_role = message.guild.roles.find('name', config.adminrolename);

  if (admin_role && message.member.roles.has(admin_role.id)) {
    permlvl = 3;
  }

  return permlvl;
};

client.login(config.token);
