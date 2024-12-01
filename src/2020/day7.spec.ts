import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day7.js'
import { readInput } from '../shared.js'

describe('2020/day7', () => {
  const input = parse(readInput(2020, 7))

  it('part 1', () => {
    equal(solution1(input), 252)
  })
  it('part 2', () => {
    equal(solution2(input), 35487)
  })
})
