const Discord = require('discord.js');

module.exports = {
    name: "help",
    permissions: [],
    description: "Displays list of commands",
    execute(message, args, cmd, client, Discord){
        const help = new Discord.MessageEmbed()
        help.setAuthor('Vortex Command List')
        help.setDescription('Displays all commands')
        help.setColor('RANDOM')
        help.setFooter('-The Horizon Team')
        help.setTimestamp()
        help.addFields(
            { name: '🎲 Fun', value: '`$helpfun`', inline: true},
            { name: ':tools: Moderation', value: '`$helpmod`', inline: true},
            { name: ':globe_with_meridians: Miscellaneous', value: '`$helpmisc`', inline: true},
            { name: '💰 Moderation', value: '`$helpcurrency`'}
        )
        message.channel.send(help)
    }

}