const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('大胆'),

    async execute(interaction){

        const replies = [
            "原神",
            "王者荣耀",
            "英雄联盟",
            "逆水寒",
            // Add more responses as needed
        ];

        const randomIndex = Math.floor(Math.random() * replies.length);
        interaction.reply(`${replies[randomIndex]}？启动！`);
    }
}