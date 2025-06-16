import { exampleCommand } from "./commands/index.ts"
import { Commander } from "./index.ts"

async function main() {
  const commander = new Commander(process.argv)

  commander.use(exampleCommand)
  // commander.default(exampleCommand)

  await commander.run()
}

main()
