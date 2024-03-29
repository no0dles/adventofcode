import { parse, solution1, solution2 } from './day7'
import { readInput } from '../shared'

describe('2020/day7', () => {
  const input = parse(readInput(2020, 7))

  it('part 1', () => {
    expect(solution1(input)).toBe(252)
  })
  it('part 2', () => {
    expect(solution2(input)).toBe(35487)
  })
})
