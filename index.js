require('http').createServer((req, res) => res.end('Hola')).listen();

/////

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const fs = require('fs')
const path = require('path')

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));

for (const fileEvent of dirEvents) {
  const event = require(path.join(__dirname, 'events', fileEvent));
  client.on(event.name, (...args) => event.run(client, ...args));
}

client.on('ready', () => {
  console.log('Toy activo prrrrr')
  client.application.commands.set([
    {
      name: 'ping',
      description: 'Pingeame esta!',
      options: [],
    }
  ]);
});

client.on('interactionCreate', (int) => {
if (int.isCommand() && int.commandName === 'ping') {
  int.reply('pong!')
}  
})

client.login(process.env.Token);