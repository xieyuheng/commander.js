import Path from "path"
import yargsParser from "yargs-parser"
import { helpCommand } from "../commands/index.ts"
import { type Command } from "./Command.ts"

export class Commander {
  name?: string
  commands: Array<Command> = [helpCommand]
  defaultCommand: Command = helpCommand
  args: Array<string | number | boolean> = []
  options: Record<string, any> = {}

  use(command: Command): void {
    this.commands.push(command)
  }

  default(command: Command): void {
    this.defaultCommand = command
  }

  prepare(parsedArgv: yargsParser.Arguments): void {
    this.args = parsedArgv._.slice(1)
    this.options = { ...parsedArgv }
    delete this.options["_"]
  }

  listCommands(): void {
    console.log(`commands:`)
    for (const command of this.commands) {
      console.log(`  ${command.name} -- ${command.description}`)
    }
  }

  async run(argv: Array<string>): Promise<void> {
    this.name = Path.basename(argv[1])

    const commandName = argv[2]

    for (const command of this.commands) {
      if (command.name === commandName) {
        this.prepare(yargsParser(argv.slice(2)))
        return command.run(this)
      }
    }

    if (this.defaultCommand) {
      this.prepare(yargsParser(argv.slice(1)))
      return this.defaultCommand.run(this)
    }

    console.error(`unknown command: ${commandName}`)
  }
}
