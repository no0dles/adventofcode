import { parse, solution1, solution2 } from './day3'
import { readInput } from './shared'

describe('day3', () => {
  const input = parse(readInput(3))

  it('part 1', () => {
    expect(solution1(input)).toBe(294)
  })
  it('part 2', () => {
    expect(solution2(input)).toBe(5774564250)
  })
})
