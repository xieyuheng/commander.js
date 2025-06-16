import Path from "path"
import yargsParser from "yargs-parser"
import { type Command } from "./Command.ts"

export class Commander {
  commands: Array<Command> = []
  defaultCommand?: Command

  constructor(public argv: Array<string>) {}

  get name(): string {
    return Path.basename(this.argv[1])
  }

  get commandName(): string {
    return process.argv[2]
  }

  get parsedArgv() {
    return yargsParser(process.argv.slice(2))
  }

  get args() {
    return this.parsedArgv._.slice(1)
  }

  get opts() {
    const opts = { ...this.parsedArgv }
    delete opts._
    return opts
  }

  use(command: Command): void {
    this.commands.push(command)
  }

  async run(): Promise<void> {
    for (const command of this.commands) {
      if (command.name === this.commandName) {
        console.log(command.name)
        console.log(this.args)
        console.log(this.opts)
      }
    }
  }
}
