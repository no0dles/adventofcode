import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day5.js'
import { readInput } from '../shared.js'

describe('2020/day5', () => {
  const input = parse(readInput(2020, 5))

  it('part 1', () => {
    equal(solution1(input), 858)
  })
  it('part 2', () => {
    equal(solution2(input), 557)
  })
})
