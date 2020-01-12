const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let reportschannel = message.guild.channels.find(`name`, "coupon-claims");
  if(!reportschannel) return message.channel.send("Couldn't find coupon-claims channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(`${message.author} has claimed a coupon code!`);

}

module.exports.help = {
  name: "claim"
}
