const Discord = require('discord.js');

module.exports = {
    name: "helpcurrency",
    permissions: [],
    description: "Displays list of currency commands",
    execute(message, args, cmd, client, Discord){
        const helpfun = new Discord.MessageEmbed()
        helpfun.setAuthor('💰 Currency Commands')
        helpfun.setDescription('`beg`, `bal`, `with`, `dep`, `daily`')
        helpfun.setColor('RANDOM')
        helpfun.setFooter('use $ before each command.')
        helpfun.setTimestamp()
        message.channel.send(helpfun)
    }

}