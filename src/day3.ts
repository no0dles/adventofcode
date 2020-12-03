import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.join(process.cwd(), 'assets/day3.txt'));
const lines = content.toString().split('\n');
const width = lines[0].length;

function traverse(vx: number, vy: number) {
  let x = 0, count = 0;
  for (let y = 0; y < lines.length; y += vy) {
    const char = lines[y][x % width];
    x += vx;
    if (char === '#') {
      count++;
    }
  }
  return count;
}

const part1Count = traverse(3, 1);
const part2Count = traverse(1, 1) * traverse(3, 1) * traverse(5, 1) * traverse(7, 1) * traverse(1, 2);

console.log(`Part 1: ${part1Count} Trees`);
console.log(`Part 2: ${part2Count} Trees`);
