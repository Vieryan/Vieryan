const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Lirik Lagu Nissa Sabyan") {
        message.channel.send("Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........Hmmmmmmm.........");

        return;
}
   
    

});

bot.login(process.env.BOT_TOKEN);
