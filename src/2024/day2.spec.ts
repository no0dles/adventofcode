import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { solution1, solution2 } from './day2.js'
import { readInput } from '../shared.js'

describe('2024/day2', () => {
  it('demo 1', () => {
    const demo = '7 6 4 2 1\n' +
      '1 2 7 8 9\n' +
      '9 7 6 2 1\n' +
      '1 3 2 4 5\n' +
      '8 6 4 4 1\n' +
      '1 3 6 7 9';

    equal(solution1(demo), 2);
  })

  it('part 1', () => {
    equal(solution1(readInput(2024, 2)), 524);
  })

  it('demo 2', () => {
    const demo = '7 6 4 2 1\n' +
      '1 2 7 8 9\n' +
      '9 7 6 2 1\n' +
      '1 3 2 4 5\n' +
      '8 6 4 4 1\n' +
      '1 3 6 7 9';
    equal(solution2(demo), 4);
  })

  it('part 2', () => {
    equal(solution2(readInput(2024, 2)), 569);
  })
})
