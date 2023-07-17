const { token } = require('./config.json');
const { Client, Events, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js')
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds] | [GatewayIntentBits.GuildMembers] | [GatewayIntentBits.MessageContent] | [GatewayIntentBits.GuildMessages] });

// client.commands = getCommands('./commands')

// client.once(Events.ClientReady, c => {
//     console.log(`Logged in as ${c.user.tag}`);
// })

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for(const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}


// client.on(Events.InteractionCreate, interaction => {
//     if(!interaction.isChatInputCommand()) return;

//     let command = client.commands.get(interaction.commandName);

//     try {
//         if(interaction.replied) return;
//         command.execute(interaction);
//     } catch(error) {
//         console.error(error);
//     }
// });

client.login(token);
 

