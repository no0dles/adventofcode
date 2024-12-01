import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day10.js'
import { readInput } from '../shared.js'

describe('2020/day10', () => {
  const data = parse(readInput(2020, 10))

  it('demo 1', () => {
    const data = parse(
      '28\n' +
        '33\n' +
        '18\n' +
        '42\n' +
        '31\n' +
        '14\n' +
        '46\n' +
        '20\n' +
        '48\n' +
        '47\n' +
        '24\n' +
        '23\n' +
        '49\n' +
        '45\n' +
        '19\n' +
        '38\n' +
        '39\n' +
        '11\n' +
        '1\n' +
        '32\n' +
        '25\n' +
        '35\n' +
        '8\n' +
        '17\n' +
        '7\n' +
        '9\n' +
        '4\n' +
        '2\n' +
        '34\n' +
        '10\n' +
        '3'
    )
    equal(solution1(data), 22 * 10)
  })

  it('part 1', () => {
    equal(solution1(data), 1917)
  })

  it('demo 2', () => {
    const data = parse(
      '16\n' +
        '10\n' +
        '15\n' +
        '5\n' +
        '1\n' +
        '11\n' +
        '7\n' +
        '19\n' +
        '6\n' +
        '12\n' +
        '4'
    )
    equal(solution2(data), 8)
  })

  it('part 2', () => {
    equal(solution2(data), 113387824750592)
  })
})
