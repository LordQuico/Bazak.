require('http').createServer((req, res) => res.end('Hola')).listen();

/////

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const fs = require('fs')
const path = require('path')

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));
const dirCommands = fs.readdirSync(path.join(__dirname, 'commands'));

for (const fileEvent of dirEvents) {
  const event = require(path.join(__dirname, 'events', fileEvent));
  client.on(event.name, (...args) => event.run(client, ...args));
}

client.commands = new Discord.Collection();
for (const subFolder of dirCommands) {
  const filesCommands = fs.readdirSync(path.join(__dirname, 'commands', subFolder));
  
  for (const fileCommand of filesCommands) {
    
  }
}

client.on('interactionCreate', (int) => {
if (int.isCommand() && int.commandName === 'ping') {
  int.reply('pong!')
}  

  if (int.isCommand() && int.commandName === 'pingea') {
    const usuario = int.options.getUser('usuario');

    int.reply(`${usuario.username} Ups se me chispoteo`);
  }
});
  

client.login(process.env.Token);