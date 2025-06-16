import { test } from "node:test"
import { commander } from "./example-commander.ts"

async function testCommandLine(line: string) {
  console.log(`input: ${line}`)
  await commander.run(line.split(" "))
}

test("example-commander", async () => {
  await testCommandLine("node commander help")
  await testCommandLine("node commander add 2 2")
  await testCommandLine("node commander mul 2 2")
})
