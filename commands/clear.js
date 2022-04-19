module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    description: "Clear Messages!",
    
    async execute(message, args, cmd, client, Discord) {

    if(!args[0]) return message.reply("Please enter the amount of messages you want to clear.");
    if(isNaN(args[0])) return message.reply("Please enter a valid number.");
    
    if(args[0] > 100) return message.reply("You can't delete more that 100 messages.");
    if(args[0] < 1) return message.reply("You must delete at least 1 message.");
    
    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
    message.channel.bulkDelete(messages);
        });

    }
}