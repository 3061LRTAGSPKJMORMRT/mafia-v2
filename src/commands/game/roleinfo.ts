import { APIEmbed, ApplicationCommandOptionType, ChatInputApplicationCommandData, Embed, EmbedData, JSONEncodable } from "discord.js";
import { embeds } from "../../functions";
import { roles } from "../../roles";
import { ExtendedClient, ExtendedInteraction } from "../../types";

const data: ChatInputApplicationCommandData = {
    name: "roleinfo",
    description: "View the info of a role.",
    options: [
        { name: "role", description: "The role to view.", type: ApplicationCommandOptionType.String, required: true, autocomplete: true }
    ]
}

const run = async (interaction: ExtendedInteraction) => {
    let role = interaction.options.getString("role")
    if (!roles[role?.toLowerCase() as keyof String]) return interaction.reply({ content: "Role not found!", ephemeral: true })
    
    let embed: EmbedData | APIEmbed = embeds.roleinfo(role)

    // @ts-ignore
    await interaction.reply({ embeds: [embed] })
   
}