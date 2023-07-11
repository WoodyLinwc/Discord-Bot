const { token } = require('./config.json')
const { Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);

    const ping = new SlashCommandBuilder()
        .setName('who')
        .setDescription('汪汪汪');

    const hello = new SlashCommandBuilder()
        .setName('hello')
        .setDescription('打个招呼吧')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to say hi to')
                .setRequired(false)    
        )

    client.application.commands.create(ping, "980887444431978517")
    client.application.commands.create(hello, "980887444431978517")
})

client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === "who") {
        interaction.reply("我是山里灵活的狗");
    }
    if(interaction.commandName === "hello") {
        const user = interaction.options.getUser('user') || interaction.user;
        interaction.reply(`Hello ${user.username}!`);
    }
    console.log(interaction);
});

client.login(token);