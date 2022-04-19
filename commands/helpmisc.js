const Discord = require('discord.js');

module.exports = {
    name: "helpmisc",
    permissions: [],
    description: "Displays list of miscellaneous commands",
    execute(message, args, cmd, client, Discord){
        const helpfun = new Discord.MessageEmbed()
        helpfun.setAuthor('🌐 Miscellaneous Commands')
        helpfun.setDescription('`website`, `suggest`, `play`, `leave`, `ping`')
        helpfun.setColor('RANDOM')
        helpfun.setFooter('use $ before each command.')
        helpfun.setTimestamp()
        message.channel.send(helpfun)
    }

}