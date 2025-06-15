import { Command } from "./Command.ts"

export type Commander = {
  name: string
  commands: Array<Command>
  defaultCommand?: Command
  run(): void
}

export function createCommander(): Commander {}

// function main() {
//   const commander = createCommander(name)
//   commander.use(runCommand)
//   commander.run()
// }
