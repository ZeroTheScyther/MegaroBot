const Discord = require("discord.js");
const Shoppy = require('Shoppy.gg');
const config = require('./config.json');
const API = new Shoppy.API(config.apiKey);

module.exports.run = async (bot, message, args) => {
  
  API.getProducts()
  .then(data => {})
  .catch(items => {
	message.channel.send(items);
    console.log(items);
  });

}

module.exports.help = {
  name: "products"
}
