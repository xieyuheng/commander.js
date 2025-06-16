import { type Command } from "./Command.ts"

export class Commander {
  commands: Array<Command> = []
  defaultCommand?: Command

  constructor(public name: string) {}

  run(): void {}
}
