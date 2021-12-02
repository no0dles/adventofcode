import { parse, solution1, solution2 } from './day2'
import { readInput } from '../shared'

describe('2020/day2', () => {
  const input = parse(readInput(2020, 2))

  it('part 1', () => {
    expect(solution1(input)).toBe(416)
  })
  it('part 2', () => {
    expect(solution2(input)).toBe(688)
  })
})
