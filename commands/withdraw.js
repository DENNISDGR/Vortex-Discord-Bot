const profileModel = require("../models/profileSchema");

module.exports = {
    name: "withdraw",
    aliases: ["with"],
    permissions: [],
    description: "withdraw coins from your bank",
    async execute(message, args, cmd, client, discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Withdraw amount must be a whole number.');
        try{
            if(amount > profileData.bank) return message.channel.send("You don't have that amount of Risecoins in your bank.");
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    risecoins: amount,
                    bank: -amount,
                }
            });

            return message.channel.send(`${amount} <:risecoin:858060036339925044> were withrawn from your bank.`);
        }catch(err){
            console.log(err)
        }
    },
};