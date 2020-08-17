// Written by Jacoby

require("dotenv").config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity("The Stars 🌌", {type: "WATCHING"});

  console.log("Ready");
});

client.login(process.env.TOKEN);