import { parse, solution1, solution2 } from './day4'
import { readInput } from '../shared'

describe('2020/day4', () => {
  const input = parse(readInput(2020, 4))

  it('part 1', () => {
    expect(solution1(input)).toBe(242)
  })
  it('part 2', () => {
    expect(solution2(input)).toBe(186)
  })
})
