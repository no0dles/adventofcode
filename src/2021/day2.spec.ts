import { parse, solution1, solution2 } from './day2'
import { readInput } from '../shared'

describe('2021/day2', () => {
  const content = readInput(2021, 2)
  const demo = parse(
    'forward 5\n' +
      'down 5\n' +
      'forward 8\n' +
      'up 3\n' +
      'down 8\n' +
      'forward 2'
  )

  it('demo 1', () => {
    const result = solution1(demo)
    expect(result).toBe(150)
  })

  it('demo 2', () => {
    const result = solution2(demo)
    expect(result).toBe(900)
  })

  it('part 1', () => {
    expect(solution1(parse(content))).toBe(1488669)
  })

  it('part 2', () => {
    expect(solution2(parse(content))).toBe(1176514794)
  })
})
