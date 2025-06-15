import { type Command } from "./Command.ts"

export type Commander = {
  name: string
  commands: Array<Command>
  defaultCommand?: Command
  run(): void
}

export function createCommander(name: string): Commander {
  const commands: Array<Command> = []

  function run() {
    return
  }

  return {
    name,
    commands,
    run,
  }
}

// function main() {
//   const commander = createCommander(name)
//   commander.use(runCommand)
//   commander.run()
// }
