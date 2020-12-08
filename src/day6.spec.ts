import { parse, solution1, solution2 } from './day6'
import { readInput } from './shared'

describe('day6', () => {
  const input = parse(readInput(6))

  it('part 1', () => {
    expect(solution1(input)).toBe(6506)
  })
  it('part 2', () => {
    expect(solution2(input)).toBe(3243)
  })
})
