import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { solution1, solution2 } from './day3.js'
import { readInput } from '../shared.js'

describe('2024/day3', () => {
  it('demo 1', () => {
    const demo = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

    equal(solution1(demo), 161);
  })

  it('part 1', () => {
    equal(solution1(readInput(2024, 3)), 183380722);
  })

  it('demo 2', () => {
    const demo = 'xmul(2,4)&mul[3,7]!^don\'t()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))';
    equal(solution2(demo), 48);
  })

  it('part 2', () => {
    equal(solution2(readInput(2024, 3)), 82733683);
  })
})
