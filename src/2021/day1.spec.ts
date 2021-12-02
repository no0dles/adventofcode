import { parse, solution1, solution2 } from './day1'
import { readInput } from '../shared'

describe('2021/day1', () => {
  const content = readInput(2021, 1)

  it('demo 1', () => {
    const demo = parse(
      '199\n' +
        '200\n' +
        '208\n' +
        '210\n' +
        '200\n' +
        '207\n' +
        '240\n' +
        '269\n' +
        '260\n' +
        '263'
    )
    const result = solution1(demo)
    expect(result).toBe(7)
  })

  it('demo 2', () => {
    const demo = parse(
      '199\n' +
        '200\n' +
        '208\n' +
        '210\n' +
        '200\n' +
        '207\n' +
        '240\n' +
        '269\n' +
        '260\n' +
        '263'
    )
    const result = solution2(demo)
    expect(result).toBe(5)
  })

  it('part 1', () => {
    expect(solution1(parse(content))).toBe(1722)
  })
  it('part 2', () => {
    expect(solution2(parse(content))).toBe(1748)
  })
})
