const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    permissions: [],
    cooldown: 3,
    description: 'Displays a meme.',
    async execute(message, args, cmd, client, Discord) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send('Fetching you a meme!');
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postlink} | Subreddit ${json.subreddit}`)
                    .setColor('RANDOM');
                
                    msg.edit(memeEmbed);
            });
    }
}