import { parse, solution } from './day1'
import { readInput } from './shared'

describe('day1', () => {
  const input = parse(readInput(1))

  it('part 1', () => {
    expect(solution(1, input)).toBe(902451)
  })
  it('part 2', () => {
    expect(solution(2, input)).toBe(85555470)
  })
})
