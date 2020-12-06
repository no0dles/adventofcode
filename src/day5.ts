import fs from 'fs';
import path from 'path';
import assert from 'assert';

const content = fs.readFileSync(path.join(process.cwd(), 'assets/day5.txt'));
const totalRows = 128;
const totalColumns = 8;

function binary(line: string, max: number, lowChar = 'F', highChar = 'B') {
  let low = 0, high = max - 1, half = max / 2;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === lowChar) {
      high -= half;
    } else if (line[i] === highChar) {
      low += half;
    } else {
      throw new Error(`unknown char ${line[i]}`);
    }
    half /= 2;
  }
  assert(low === high, `low ${low} should be equal to high ${high}`);
  return low;
}

function getSeat(line: string) {
  const row = binary(line.substr(0, 7), totalRows, 'F', 'B');
  const column = binary(line.substr(7, 3), totalColumns, 'L', 'R');
  return {
    row,
    column,
    id: row * totalColumns + column,
  };
}

const boardSeats = content.toString().split('\n').filter(l => !!l).map(getSeat);

const maxSeatId = boardSeats.reduce((max, seat) => seat.id > max ? seat.id : max, 0);
console.log(`Part 1: ${maxSeatId}`);

const seatIds = Array.from({length: (totalRows - 1) * totalColumns}, (v, k) => k + totalColumns);
const emptySeatIds = seatIds.filter(id => !boardSeats.some(s => s.id === id) &&
  boardSeats.some(s => s.id === id - 1) &&
  boardSeats.some(s => s.id === id + 1));

assert(emptySeatIds.length === 1, 'should only have one empty seat');
console.log(emptySeatIds);
