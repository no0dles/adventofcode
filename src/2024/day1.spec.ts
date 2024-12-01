import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { solution1, solution2 } from './day1.js'
import { readInput } from '../shared.js'

describe('2024/day1', () => {
  it('demo 1', () => {
    const demo = '3   4\n' +
      '4   3\n' +
      '2   5\n' +
      '1   3\n' +
      '3   9\n' +
      '3   3'

    equal(solution1(demo), 11);
  })

  it('part 1', () => {
    equal(solution1(readInput(2024, 1)), 1222801);
  })

  it('demo 2', () => {
    const demo = '3   4\n' +
      '4   3\n' +
      '2   5\n' +
      '1   3\n' +
      '3   9\n' +
      '3   3';
    equal(solution2(demo), 31);
  })

  it('part 2', () => {
    equal(solution2(readInput(2024, 1)), 22545250);
  })
})
