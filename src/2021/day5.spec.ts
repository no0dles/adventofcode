import { describe, it } from 'node:test'
import { deepEqual, ok } from 'node:assert'
import { parse, solution } from './day5.js'

describe('2021/day5', () => {
  it('should 1,1 -> 3,3', () => {
    const iterator = solution(parse('1,1 -> 3,3'))
    deepEqual(iterator.next().value, [1, 1])
    deepEqual(iterator.next().value, [2, 2])
    deepEqual(iterator.next().value, [3, 3])
    ok(iterator.next().done)
  })

  it('should 9,7 -> 7,9', () => {
    const iterator = solution(parse('9,7 -> 7,9'))
    deepEqual(iterator.next().value, [9, 7])
    deepEqual(iterator.next().value, [8, 8])
    deepEqual(iterator.next().value, [7, 9])
    ok(iterator.next().done)
  })
})
