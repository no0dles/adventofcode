import { parse, solution } from './day1'
import { readInput } from '../shared'

describe('2020/day1', () => {
  const input = parse(readInput(2020, 1))

  it('part 1', () => {
    expect(solution(1, input)).toBe(902451)
  })
  it('part 2', () => {
    expect(solution(2, input)).toBe(85555470)
  })
})
