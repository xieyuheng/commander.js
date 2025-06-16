import { Commander } from "./Commander.ts"

export interface Command {
  name: string
  description: string
  help: (commander: Commander) => string
  run: (commander: Commander) => Promise<void>
}
