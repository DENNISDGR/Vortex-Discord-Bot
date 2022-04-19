const SnakeGame = require('snakecord');
const Discord = require("discord.js");

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: false,
    gameOverTitle: "Game Over"
});

module.exports = {
    name: "snakegame",
    cooldown: 5,
    aliases: ["se"],
    permissions: [],
    description: "Snake apple game",
    execute(message, args, cmd, client, discord, profileData) {
        snakeGame.newGame(message);
    }
};