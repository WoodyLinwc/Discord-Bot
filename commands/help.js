const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Help menu for the bot'),

    async execute(interaction){
        const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription('Bot help menu')
        .setColor("Gold")
        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
        .setTimestamp()
        .addFields(
            {
                name: 'FAQs',
                value: 'example text',
                inline: false
            },
            {
                name: 'More Help',
                value: 'Contact me',
                inline: false
            }
        )

        await interaction.reply({
            embeds: [embed],
            // only the user see the text
            ephemeral: true,

        })
    }
}