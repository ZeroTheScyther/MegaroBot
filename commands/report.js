const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let  rUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reporting User", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find(`name`, "orders");
  if(!reportschannel) return message.channel.send("Couldn't find orders channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
