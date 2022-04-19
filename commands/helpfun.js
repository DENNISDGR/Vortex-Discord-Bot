const Discord = require('discord.js');

module.exports = {
    name: "helpfun",
    permissions: [],
    description: "Displays list of fun commands",
    execute(message, args, cmd, client, Discord){
        const helpfun = new Discord.MessageEmbed()
        helpfun.setAuthor('🎲 Fun Commands')
        helpfun.setDescription('`meme`, `8ball`, `snakegame`')
        helpfun.setColor('RANDOM')
        helpfun.setFooter('use $ before each command.')
        helpfun.setTimestamp()
        message.channel.send(helpfun)
    }

}