import { type Command } from "../index.ts"

export const exampleCommand: Command = {
  name: "example",
  description: "just an example command",
  help() {
    return "TODO"
  },

  async run() {
    //
  },
}
