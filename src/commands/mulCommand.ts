import { type Command } from "../index.ts"

export const mulCommand: Command = {
  name: "mul",
  description: "mul two numbers",

  help(commander) {
    return [
      `The mul command mul two numbers and print the result.`,
      ``,
      `  ${commander.name} ${this.name} 2 2`,
    ].join("\n")
  },

  async run(commander) {
    const x = Number(commander.args[0])
    const y = Number(commander.args[1])
    console.log(x * y)
  },
}
