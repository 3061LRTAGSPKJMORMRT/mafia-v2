import { Client, Collection, ChatInputCommandInteraction, ApplicationCommandOptionType, ChannelType, LocaleString, ApplicationCommandOptionChoiceData, ApplicationCommandOptionData, Snowflake, Message } from 'discord.js'
import { QuickDB } from 'quick.db'

interface ExtendedClient extends Client {
    commands?: Collection<string, any>;
    db?: QuickDB;
}


interface ExtendedInteraction extends ChatInputCommandInteraction {
    client: ExtendedClient;
}

interface ExtendedMessage extends Message {
    client: ExtendedClient;
}




export { ExtendedClient, ExtendedInteraction, ExtendedMessage }