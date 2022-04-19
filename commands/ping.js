module.exports = {
    name: 'ping',
    permissions: [],
    description: "this is a ping command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('Vortex is up and running!');
    }
}