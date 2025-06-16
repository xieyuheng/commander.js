import { type Command } from "../index.ts"

export const helpCommand: Command = {
  name: "help",
  description: "display help for a command",

  help(commander) {
    return [
      `The help command displays help for a given command.`,
      ``,
      `  ${commander.name} ${this.name} help`,
    ].join("\n")
  },

  async run(commander) {
    const commandName = commander.args[0]
    for (const command of commander.commands) {
      if (command.name === commandName) {
        console.log(`${command.name} -- ${command.description}`)
        console.log()
        console.log(command.help(commander))
        return
      }
    }

    commander.listCommands()
  },
}
