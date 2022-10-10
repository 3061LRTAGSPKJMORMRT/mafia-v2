import { Client, Interaction, ButtonInteraction } from 'discord.js'
import { ExtendedClient, ExtendedInteraction } from '../types'

const run = async (interaction: ButtonInteraction) => {
    interaction.reply("Okay baby")
}

export { run }