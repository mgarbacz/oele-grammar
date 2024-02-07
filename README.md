# oele-grammar

This is the grammar for [oele](https://github.com/mgarbacz/oele).

## Goal

The goal of this project is to parse statements written in the Okta Expression Language for correctness. Since this is a WIP, it will just be an Okay expression language evaluator for now.

Defined in this source code is a [Moo](https://github.com/no-context/moo) tokenizer/lexer and a grammar using [Nearley](https://nearley.js.org/) syntax. Nearley is then used to parse the expression.

## Supported Expressions

- AND, OR
- !=, ==, >, <, >=, <=

with more on the way!

## How to use

The code below follows the [Nearly docs on how to use a parser](https://nearley.js.org/docs/parser)

```js
import nearley from 'nearley';
import grammar from './dist/grammar.cjs';

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Streaming parser, can feed multiple lines
parser.feed('user.name == "John" AND user.age > 18');

// To query the results of the parser and print out the whole structure
console.dir(parser.results, { depth: null });
```

_Note: `parser.results` is an array, but it will always be length 1 if this grammar is correctly unambigious_

The structure of the output is still in flux as the grammar develops. I'd like to produce an abstract syntax tree and maybe have an interface that does not require interacting directly with Nearly - just one import, send in expression, get AST back.


## Developing

Once you've cloned the project, install dependencies with `npm install` (or `pnpm install` or `yarn`). This project uses Nearley to compile and test the grammar. To compile the grammar into JavaScript:

```bash
npm run compile
```

Once you've compile the grammar, you can run the `index.js` file in the project to see an example parsed with the grammar.

```bash
node index.js
```

Nearley comes with a test command, but it leaves a lot to be desired when it comes to supporting the running of test cases and comparisons against expected values. I've linked it up to npm scripts, but it won't help much at the moment. Watch this space.

```bash
npm run test
```
