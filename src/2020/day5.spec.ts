import { parse, solution1, solution2 } from './day5'
import { readInput } from '../shared'

describe('2020/day5', () => {
  const input = parse(readInput(2020, 5))

  it('part 1', () => {
    expect(solution1(input)).toBe(858)
  })
  it('part 2', () => {
    expect(solution2(input)).toBe(557)
  })
})
