import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day3.js'
import { readInput } from '../shared.js'

describe('2020/day3', () => {
  const input = parse(readInput(2020, 3))

  it('part 1', () => {
    equal(solution1(input), 294)
  })
  it('part 2', () => {
    equal(solution2(input), 5774564250)
  })
})
