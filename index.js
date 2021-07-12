const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});


client.login('ODAyMTg1MzA0OTE5MjQ0ODgw.YArjSA.MDb_SeFN7d8_0henunLMWTXadzo');
