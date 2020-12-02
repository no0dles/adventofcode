import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.join(process.cwd(), 'assets/day2.txt'));
const entries = content.toString().split('\n').filter(s => !!s).map(l => {
  const match = /(?<num1>\d+)\-(?<num2>\d+) (?<character>[a-z]): (?<password>[a-z]+)/.exec(l);
  return {
    num1: parseInt(match.groups.num1, 0),
    num2: parseInt(match.groups.num2, 0),
    character: match.groups.character,
    password: match.groups.password,
  };
});
const validPart1Entries = entries.filter(e => {
  const characterCount = e.password.split(e.character).length - 1;
  return characterCount >= e.num1 && characterCount <= e.num2;
});
const validPart2Entries = entries.filter(e => {
  const firstMatch = e.password[e.num1-1] === e.character;
  const secondMatch = e.password[e.num2-1] === e.character
  return (firstMatch && !secondMatch) || (!firstMatch && secondMatch);
})

console.log(`Part 1: ${validPart1Entries.length} of ${entries.length} are valid`);
console.log(`Part 2: ${validPart2Entries.length} of ${entries.length} are valid`);
