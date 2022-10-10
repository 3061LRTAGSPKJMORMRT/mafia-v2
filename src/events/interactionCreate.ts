import { Client, Interaction, ChatInputCommandInteraction } from 'discord.js'
import { ExtendedClient, ExtendedInteraction } from '../types'

const run = async (interaction: Interaction) => {
    if (interaction.isChatInputCommand()) interaction.client.emit('chatInputCommandCreate', interaction)
    if (interaction.isButton()) interaction.client.emit("buttonCreate", interaction)
    if (interaction.isAutocomplete()) interaction.client.emit("autocompleteCreate", interaction)
}

export { run }