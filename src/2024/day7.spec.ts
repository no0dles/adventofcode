import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { readInput } from '../shared.js'
import { solution1, solution2 } from './day7.js'

describe('2024/day7', () => {
  it('demo 1', () => {
    const demo = '190: 10 19\n' +
      '3267: 81 40 27\n' +
      '83: 17 5\n' +
      '156: 15 6\n' +
      '7290: 6 8 6 15\n' +
      '161011: 16 10 13\n' +
      '192: 17 8 14\n' +
      '21037: 9 7 18 13\n' +
      '292: 11 6 16 20';

    equal(solution1(demo), 3749);
  })

  it('part 1', () => {
    equal(solution1(readInput(2024, 7)), 1611660863222);
  })


  it('demo 2', () => {
    const demo = '190: 10 19\n' +
      '3267: 81 40 27\n' +
      '83: 17 5\n' +
      '156: 15 6\n' +
      '7290: 6 8 6 15\n' +
      '161011: 16 10 13\n' +
      '192: 17 8 14\n' +
      '21037: 9 7 18 13\n' +
      '292: 11 6 16 20';

    equal(solution2(demo), 11387);
  })

  it('part 2', () => {
    equal(solution2(readInput(2024, 7)), 945341732469724);
  })
})
