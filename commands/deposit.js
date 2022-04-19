const profileModel = require("../models/profileSchema");

module.exports = {
    name: "deposit",
    aliases: ["dep"],
    permissions: [],
    description: "deposit coins into your bank",
    async execute(message, args, cmd, client, discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit amount must be a whole number.');
        try{
            if(amount > profileData.risecoins) return message.channel.send("You don't have that amount of Risecoins.");
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    risecoins: -amount,
                    bank: amount,
                }
            });

            return message.channel.send(`${amount} <:risecoin:858060036339925044> were deposited in your bank.`);
        }catch(err){
            console.log(err)
        }
    },
};