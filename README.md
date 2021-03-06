# statemachinedebunker

lê uma maquina de estados simples

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install statemachinedebunker --save
```

## Usage

```sh
# Write to stdout
node index.js 131860876603139440.txt 

# Pipe output into a new file
node index.js 131860876603139440.txt  > saida.txt
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [date-and-time](https://ghub.io/date-and-time): A Minimalist DateTime utility for Node.js and the browser
- [fs](https://ghub.io/fs): This package name is not currently in use, but was formerly occupied by another package. To avoid malicious use, npm is hanging on to the package name, but loosely, and we&#39;ll probably give it to you if you want it.
- [yargs](https://ghub.io/yargs): yargs the modern, pirate-themed, successor to optimist.

## Dev Dependencies

None

## License

MIT
