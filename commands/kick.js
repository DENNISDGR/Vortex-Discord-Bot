module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "Kick Members!",
    execute(message, args, cmd, client, Discord) {

            const target = message.mentions.users.first();


            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
        } else {
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}