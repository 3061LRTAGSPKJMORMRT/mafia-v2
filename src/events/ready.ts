import { ExtendedClient } from '../types'

const run = async (client: ExtendedClient) => {
    console.log("✅ Bot is ready")

    let changes: any = false
    let commandData: Array<any> = []
    await client.application?.commands.fetch()
    client.commands?.each((_value, key) => {
        let theCommand = client.application?.commands.cache.find(command => command.name === key)
        if (!theCommand) changes = true
        commandData.push(client.commands?.get(key).data)
    })
    if (changes === true) {
        client.application?.commands.set(commandData)
        console.log("✅ Configured all slash commands")
    }
    console.log("done")
}

export { run }