import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day1.js'
import { readInput } from '../shared.js'

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
    equal(result, 7)
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
    equal(result, 5)
  })

  it('part 1', () => {
    equal(solution1(parse(content)), 1722)
  })
  it('part 2', () => {
    equal(solution2(parse(content)), 1748)
  })
})
