const Discord = require("discord.js");

function randomString(length, chars) {
  let mask = '';
  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  let result = '';
  for (let i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
  return result;
}

let x = 1;

module.exports.run = async (bot, message, args) => {

  x = !x;

  while (x == 1)
  {
    const code = randomString(16, '#aA');
    message.channel.send('https://discordapp.com/gifts/' +code);
    await new Promise(r => setTimeout(r, 1000));
    console.log(x);
  }

  message.delete().catch(O_o=>{});

}

module.exports.help = {
  name: "codebreaker"
}
