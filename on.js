const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
     bot.user.setGame('Mantap');

    bot.user.setStatus('Online');


    if (message.content == "Yoouda") {
        message.channel.send("Hai juga!");

        return;
}

    

});

bot.login(process.env.BOT_TOKEN);
