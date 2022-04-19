const Discord = require('discord.js')
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "daily",
    cooldown: 86400,
    aliases: [],
    permissions: [],
    description: "recieve an amount of coins daily",
    async execute(message, args, cmd, client, discord, profileData) {
        const amount = 1000
        await profileModel.findOneAndUpdate({
            userID: message.author.id
        }, {
            $inc: {
                risecoins: amount,
            }
        });

        return message.channel.send("You ecieved your daily 1000 <:risecoin:858060036339925044>");
    }
};