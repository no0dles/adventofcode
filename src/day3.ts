import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.join(process.cwd(), 'assets/day3.txt'));
const lines = content.toString().split('\n');
const width = lines[0].length;

const traverse = (vx: number, vy: number) =>
  lines.reduce((count, line, index) => {
    return count + ((index % vy === 0) ? (line[index * vx / vy % width] === '#' ? 1 : 0) : 0);
  }, 0);

const part1Count = traverse(3, 1);
const part2Count = traverse(1, 1) * traverse(3, 1) * traverse(5, 1) * traverse(7, 1) * traverse(1, 2);

console.log(`Part 1: ${part1Count} Trees`);
console.log(`Part 2: ${part2Count} Trees`);
