const roles = {
    "villager": { name: "Villager", team: "Village", lore: "It's another normal day for good ol' villager. Just finished a day of hard work, and it's good to be back home. Hope nothing bad happens!", action: "Nothing lol.", type: "None", goal: "Help village win", interactions: ["None lol."], image: "https://media.discordapp.net/attachments/923932323710398495/1028988552316465163/villager.jpg" },
    "doctor": { name: "Doctor", team: "Doctor", lore: "As the village's only medical professional, the Doctor have all the knowledge in saving mafia victims. However, the online degree does not cover non-mafia victims.", action: "Visit a player and save them from the mafia.", type: "Active", goal: "Help village win", interactions: ["You can only save targets from mafia attacks.", "You cannot save the same person two nights in a row."], image: "https://media.discordapp.net/attachments/923932323710398495/1028990119157436437/doctor.jpg?width=884&height=663" }
}

export { roles }