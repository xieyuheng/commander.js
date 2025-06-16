import { type Command } from "../index.ts"

export const exampleCommand: Command = {
  name: "example",
  description: "just an example command",
  help() {
    return "TODO"
  },

  async run(commander) {
    console.log(commander.name)
    console.log(this.name)
    console.log(commander.args)
    console.log(commander.opts)
  },
}
