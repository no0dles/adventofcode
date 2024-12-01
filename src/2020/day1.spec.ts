import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution } from './day1.js'
import { readInput } from '../shared.js'

describe('2020/day1', () => {
  const input = parse(readInput(2020, 1))

  it('part 1', () => {
    equal(solution(1, input), 902451)
  })
  it('part 2', () => {
    equal(solution(2, input), 85555470)
  })
})
