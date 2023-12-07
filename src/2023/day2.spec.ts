import {parse, parseLineForPart2, solution1, solution2} from './day1';
import { readInput } from '../shared'

describe('2023/day1', () => {
  const content = readInput(2023, 1)

  it('demo 1', () => {
    const demo = parse(
      '1abc2\n' +
      'pqr3stu8vwx\n' +
      'a1b2c3d4e5f\n' +
      'treb7uchet'
    )
    const result = solution1(demo)
    expect(result).toBe(142)
  })

  it('demo 2', () => {
    const demo = parse(
      'two1nine\n' +
      'eightwothree\n' +
      'abcone2threexyz\n' +
      'xtwone3four\n' +
      '4nineeightseven2\n' +
      'zoneight234\n' +
      '7pqrstsixteen'
    )
    const result = solution2(demo)
    expect(result).toBe(281)
  })

  it('part 1', () => {
    expect(solution1(parse(content))).toBe(55002)
  })

  it('part 2', () => {
    // expect(parseLineForPart2('v4')).toBe(44)
    // expect(parseLineForPart2('9h6nine')).toBe(99)
    expect(parseLineForPart2('eightwo')).toBe(82)
    expect(solution2(parse(content))).toBe(55061)
  })
})
