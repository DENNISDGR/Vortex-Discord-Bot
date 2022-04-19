const Discord = require('discord.js');

module.exports = {
    name: "helpmod",
    permissions: ["MUTE_MEMBERS", "KICK_MEMBERS", "MANAGE_MESSAGES", "BAN_MEMBERS"],
    description: "Displays list of moderation commands",
    execute(message, args, cmd, client, Discord){
        const helpfun = new Discord.MessageEmbed()
        helpfun.setAuthor('🛠️ Moderation Commands')
        helpfun.setDescription('`mute`, `kick`, `clear`, `ban`')
        helpfun.setColor('RANDOM')
        helpfun.setFooter('use $ before each command.')
        helpfun.setTimestamp()
        message.channel.send(helpfun)
    }

}