import nearley from 'nearley';
import grammar from './dist/grammar.cjs';

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed('user.name == "John" AND user.age > 18');

console.dir(parser.results, { depth: null });