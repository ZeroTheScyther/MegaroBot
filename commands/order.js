const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let orderNumber = message.content.slice(6);
  if(!orderNumber) return message.channel.send("Please specify the order number!");

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Order")
  .setColor("#15f153")
  .addField("User", `${message.author} with ID: ${message.author.id}`)
  .addField("Time", message.createdAt)
  .addField("Order Number", orderNumber);

  let reportschannel = message.guild.channels.find(`name`, "orders");
  if(!reportschannel) return message.channel.send("Couldn't find orders channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "order"
}
