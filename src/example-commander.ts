import { addCommand, mulCommand } from "./commands/index.ts"
import { Commander } from "./index.ts"

export const commander = new Commander()

commander.use(addCommand)
commander.use(mulCommand)
