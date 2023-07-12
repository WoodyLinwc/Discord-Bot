const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('who')
    .setDescription('猜猜我是谁'),

    async execute(interaction){
        interaction.reply("我是山里灵活的狗");
    }
}

