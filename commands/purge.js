const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.member.roles.find("name", "Owner"));
  if (!message.member.roles.find("name", "Owner")) return message.channel.send("You are not an owner");
  if (isNaN(args[0])) return message.channel.send("Specify the number of messages to purge");
  if (args[0] > 100) return message.channel.send("I can only delete up to 100 messages");

  message.channel.bulkDelete(args[0]);
}

module.exports.help = {
  name: "purge"
}
