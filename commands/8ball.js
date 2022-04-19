const Discord = require('discord.js')
const answers = [
    "It is certain.",
    "It is decidely so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely",
    "Outlook good.",
    "Yes.",
    "Signs points to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate, and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

module.exports = {
    name: '8ball',
    permissions: [],
    description: 'Gives the perfect answer!',
    execute(message, args, cmd, client, Discord){
        const eightball = new Discord.MessageEmbed()
        eightball.setTitle(':8ball: 8ball')
        eightball.setDescription(answers[Math.floor(Math.random() * answers.length)])
        eightball.setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(eightball)
    }
}