module.exports = {
    name: 'leave',
    aliases: ['l', 'lv'],
    permissions: [],
    description: 'Leave the bot from a voice channel.',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Enter a voice channel fisrt!");
        await voiceChannel.leave();
        await message.channel.send('Leaving the channel :smiling_face_with_tear:')
    }
}