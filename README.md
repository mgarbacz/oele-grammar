# oele-grammar

This is the grammar for [oele](https://github.com/mgarbacz/oele).

## Goal

The goal of this project is to parse statements written in the Okta Expression Language for correctness. Since this is a WIP, it will just be an Okay expression language evaluator for now.

Defined in this source code is a [Moo](https://github.com/no-context/moo) tokenizer/lexer and a grammar using [Nearley](https://nearley.js.org/) syntax. Nearley is then used to parse the expression language.

## Developing

Once you've cloned the project, install dependencies with `npm install` (or `pnpm install` or `yarn`). This project uses Nearley to compile and test the grammar. To compile the grammar into JavaScript:

```bash
npm run compile
```

Nearley comes with a test command, but it leaves a lot to be desired when it comes to supporting the running of test cases and comparisons against expected values. I've linked it up to npm scripts, but it won't help much at the moment. Watch this space.

```bash
npm run test
```