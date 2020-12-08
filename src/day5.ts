import assert from 'assert'

const totalRows = 128
const totalColumns = 8

function binary(line: string, max: number, lowChar = 'F', highChar = 'B') {
  let low = 0,
    high = max - 1,
    half = max / 2
  for (let i = 0; i < line.length; i++) {
    if (line[i] === lowChar) {
      high -= half
    } else if (line[i] === highChar) {
      low += half
    } else {
      throw new Error(`unknown char ${line[i]}`)
    }
    half /= 2
  }
  assert(low === high, `low ${low} should be equal to high ${high}`)
  return low
}

export interface Seat {
  row: number
  column: number
  id: number
}

function getSeat(line: string): Seat {
  const row = binary(line.substr(0, 7), totalRows, 'F', 'B')
  const column = binary(line.substr(7, 3), totalColumns, 'L', 'R')
  return {
    row,
    column,
    id: row * totalColumns + column,
  }
}

export function parse(content: string) {
  return content
    .toString()
    .split('\n')
    .filter((l) => !!l)
    .map(getSeat)
}

export function solution1(input: Seat[]) {
  return input.reduce((max, seat) => (seat.id > max ? seat.id : max), 0)
}

export function solution2(input: Seat[]) {
  const seatIds = Array.from(
    { length: (totalRows - 1) * totalColumns },
    (v, k) => k + totalColumns
  )
  const emptySeatIds = seatIds.filter(
    (id) =>
      !input.some((s) => s.id === id) &&
      input.some((s) => s.id === id - 1) &&
      input.some((s) => s.id === id + 1)
  )

  assert(emptySeatIds.length === 1, 'should only have one empty seat')
  return emptySeatIds[0]
}
