module.exports = {
    name: 'website',
    permissions: [],
    cooldown: 5,
    description: "this is a website command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('https://imtheghost6321.wixsite.com/my-site-5');
    }
}