import { parse, parseLineForPart2, solution1, solution2 } from './day1.js'
import { readInput } from '../shared.js'
import { describe, it } from 'node:test'
import { equal } from 'node:assert'

describe('2023/day1', () => {
  const content = readInput(2023, 1)

  it('demo 1', () => {
    const demo = parse(
      '1abc2\n' + 'pqr3stu8vwx\n' + 'a1b2c3d4e5f\n' + 'treb7uchet'
    )
    const result = solution1(demo)
    equal(result, 142)
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
    equal(result, 281)
  })

  it('part 1', () => {
    equal(solution1(parse(content)), 55002)
  })

  it('part 2', () => {
    equal(parseLineForPart2('eightwo'), 82)
    equal(solution2(parse(content)), 55093)
  })
})
