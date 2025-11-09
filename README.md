# Commander.js

A simple library for building CLI with sub-commands in Node.js.

## Usage

```typescript
import { Commander, type Command } from "@xieyuheng/commander"

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

async function main() {
  const commander = new Commander()
  commander.use(addCommand)
  await commander.run(process.argv)
}

main()
```

## License

[GPLv3](LICENSE)
