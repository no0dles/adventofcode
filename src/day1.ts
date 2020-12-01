import fs from 'fs';
import path from 'path';

function* nested(depth: number, items: number[]): Generator<{
  sum: number,
  multiply: number,
  items: number[]
}> {
  for (let item of items) {
    if (depth === 0) {
      yield {sum: item, multiply: item, items: [item]};
    } else {
      for (let result of nested(depth - 1, items)) {
        if (result.items.indexOf(item) >= 0) {
          continue;
        }
        yield {sum: result.sum + item, multiply: result.multiply * item, items: [...result.items, item]};
      }
    }
  }
}

const content = fs.readFileSync(path.join(process.cwd(), 'assets/day1.txt'));
const items = content.toString().split('\n').map(l => parseInt(l, 0));
const target = 2020;
const depths = [1, 2];

for (const depth of depths) {
  for (const result of nested(depth, items)) {
    if (result.sum === target) {
      console.log(`${result.items.join(' * ')} = ${result.items.reduce((res, i) => res * i, 1)}`);
      break;
    }
  }
}
