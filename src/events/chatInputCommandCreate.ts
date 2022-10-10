import { Client, Interaction, ChatInputCommandInteraction } from 'discord.js'
import { ExtendedClient, ExtendedInteraction } from '../types'

const run = async (interaction: ExtendedInteraction) => {
    interaction.client.commands?.get(interaction.commandName).run(interaction)
}

export { run }