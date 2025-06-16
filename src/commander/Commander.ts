import Path from "path"
import yargsParser from "yargs-parser"
import { type Command } from "./Command.ts"

export class Commander {
  commands: Array<Command> = []
  defaultCommand?: Command
  args: Array<string | number | boolean> = []
  options: Record<string, any> = {}

  constructor(public argv: Array<string>) {}

  get name(): string {
    return Path.basename(this.argv[1])
  }

  use(command: Command): void {
    this.commands.push(command)
  }

  default(command: Command): void {
    this.defaultCommand = command
  }

  prepare(argv: yargsParser.Arguments): void {
    this.args = argv._.slice(1)
    this.options = { ...argv }
    delete this.options["_"]
  }

  async run(): Promise<void> {
    const commandName = this.argv[2]

    for (const command of this.commands) {
      if (command.name === commandName) {
        this.prepare(yargsParser(this.argv.slice(2)))
        return command.run(this)
      }
    }

    if (this.defaultCommand) {
      this.prepare(yargsParser(this.argv.slice(1)))
      return this.defaultCommand.run(this)
    }
  }
}
