import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day6.js'
import { readInput } from '../shared.js'

describe('2020/day6', () => {
  const input = parse(readInput(2020, 6))

  it('part 1', () => {
    equal(solution1(input), 6506)
  })
  it('part 2', () => {
    equal(solution2(input), 3243)
  })
})
