import { EmbedData, MessageOptions, Snowflake } from 'discord.js';
import { ExtendedClient } from './types';
import { roles } from './roles'

const embeds = {
    roleinfo(role) {
        const { name, lore, action, type, team, goal, interactions, image } = roles[role?.toLowerCase() as keyof String]
        let embed: EmbedData = {
            title: `You are a ${name}.`,
            description: lore,
            fields: [
                { name: "What you do each night 🖐️", value: action, inline: false },
                { name: "Visit type 🏃‍♂️", value: type, inline: true },
                { name: "Side 👀", value: team, inline: true },
                { name: "Goal 🥅", value: goal, inline: false },
                { name: "Special Interactions ⭐", value: interactions.map(a => `:white_small_square: ${a}`).join("\n"), inline: false }
            ],
            image: { url: image }
        }
        return embed
    }
}



export { embeds }