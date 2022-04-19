const Discord = require('discord.js')
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "beg",
  cooldown: 3,
  aliases: [],
  permissions: [],
  description: "beg for coins",
  async execute(message, args, cmd, client, discord, profileData) {

    const begEmbed = new Discord.MessageEmbed()
    const randomNumber = Math.floor(Math.random() * 500) + 1;

    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          risecoins: randomNumber,
        },
      }
    );
    begEmbed.setTitle("Risecoins Received")
    begEmbed.setDescription(`${message.author.username}, you received ${randomNumber} <:risecoin:858060036339925044>`);
    begEmbed.setColor('RANDOM')

    return message.channel.send(begEmbed)
  },
};
