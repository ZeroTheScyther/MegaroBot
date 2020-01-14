const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const Shoppy = require('Shoppy.gg');
const API = new Shoppy.API(config.apiKey);
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.")
    return;
  }

  jsfile.forEach((f, i) => {
   let props = require(`./commands/${f}`);
   console.log(`${f} loaded!`);
   bot.commands.set(props.help.name, props);

  });
});

bot.login(config.token);

//if(message.author.id !== config.ownerID) return;
bot.on("ready", () => {
    bot.user.setActivity("with my code");
    console.log("Ready to roll!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);



  if(cmd === `ping`)
  {
    return message.channel.send("Pong!");
  }

  if(cmd === `${prefix}guildinfo`){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Guild Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd ===  `${prefix}botinfo`)
  {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Creator", "ZeroTheScyther");

    return message.channel.send(botembed);
  }
});

bot.login(config.token);
//if(message.author.id !== config.ownerID) return;