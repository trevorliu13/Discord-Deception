const {runningGames} = require('../bot.js');

module.exports = msg => {
    const game = runningGames[msg.guild]

    if (!game)
    {
        return msg.reply("There's no started game to cancel! Use ?help to see what games you can choose from.")
    }
    else if (msg.author != game.host)
    {
        return msg.channel.send("Only the host (<@!" + game.host + ">) can ?cancel the game, you trickster you.")
    }

    delete runningGames[msg.guild]
    msg.reply('Your game has been #cancelled')
}