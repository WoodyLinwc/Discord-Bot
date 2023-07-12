const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('who')
    .setDescription('汪汪汪'),

    async execute(interaction){
        interaction.reply("我是山里灵活的狗");
    }
}

