import { ApplicationCommandOptionChoiceData, AutocompleteInteraction, Client, Interaction,  } from 'discord.js'
import { roles } from '../roles'
import { ExtendedClient, ExtendedInteraction } from '../types'

const run = async (interaction: AutocompleteInteraction) => {
    let role = interaction.options.getString("role")
    if (!role) return;
    let allroles: ApplicationCommandOptionChoiceData<string>[] = Object.keys(roles).map(a => { return { name: a, value: a } })
    if (role?.trim().length === 0) return interaction.respond(allroles)
    let existingRles = Object.keys(roles).filter(a => a.startsWith(`${role?.toLowerCase()}`))
    if (existingRles.length === 0) return interaction.respond([{ name: "No roles found", value: "None" }])
    interaction.respond(existingRles.map(a => { return { name: a, value: a } }))
}

export { run }