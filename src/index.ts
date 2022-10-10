
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js'
import { QuickDB } from 'quick.db'
import fs from 'fs'
import { ExtendedClient } from './types'
import { token } from './config'


const client: ExtendedClient = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages], partials: [Partials.Channel, Partials.User] })
client.commands = new Collection()
client.db = new QuickDB()

function loadCommands() {
    let files: Array<String> = fs.readdirSync("./src/commands")
    files.forEach(folder => {
        let commands: Array<String> = fs.readdirSync(`./src/commands/${folder}`)
        commands.forEach(async file => {
            let command = await import(`./commands/${folder}/${file}`)
            command.folder = folder
            client.commands?.set(command.data.name, command)
            console.log(`✅ Loaded ${file}`)
        })
    })
}

function loadEvents() {
    let events: Array<String> = fs.readdirSync("./src/events")
    events.forEach(async file => {
            let events = await import(`./events/${file}`)
            events.name = file.replace(".ts", "")
            client.on(events.name, async (...args) => events.run(...args))
            console.log(`✅ Loaded ${file}`)
        
    })
}

loadCommands()
loadEvents()

client.login(token)