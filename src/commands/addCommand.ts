import { type Command } from "../index.ts"

export const addCommand: Command = {
  name: "add",
  description: "add two numbers",

  help(commander) {
    return [
      `The add command add two numbers and print the result.`,
      ``,
      `  ${commander.name} ${this.name} 2 2`,
    ].join("\n")
  },

  async run(commander) {
    const x = Number(commander.args[0])
    const y = Number(commander.args[1])
    console.log(x + y)
  },
}
