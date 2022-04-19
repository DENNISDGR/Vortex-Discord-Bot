const Discord = require('discord.js')

  module.exports = {
    name: 'balance',
    aliases: ["bal", "bl"],
    permissions: [],
    description: 'Check the user balance',
    execute(message, args, cmd, client, discord, profileData){
        const balanceEmbed = new Discord.MessageEmbed()
        balanceEmbed.setTitle("Your Balance")
        balanceEmbed.setDescription(`Wallet Balance ${profileData.risecoins} <:risecoin:858060036339925044>
        Bank Balance ${profileData.bank} <:risecoin:858060036339925044>`);
        balanceEmbed.setColor('RANDOM')
        balanceEmbed.setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(balanceEmbed)
    }
}