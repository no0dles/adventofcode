import { describe, it } from 'node:test'
import { deepEqual } from 'node:assert'
import { getAdjacents, parse } from './day11.js'
import { readInput } from '../shared.js'

describe('2020/day11', () => {
  const demoData = parse(
    'L.LL.LL.LL\n' +
      'LLLLLLL.LL\n' +
      'L.L.L..L..\n' +
      'LLLL.LL.LL\n' +
      'L.LL.LL.LL\n' +
      'L.LLLLL.LL\n' +
      '..L.L.....\n' +
      'LLLLLLLLLL\n' +
      'L.LLLLLL.L\n' +
      'L.LLLLL.LL'
  )
  const data = parse(readInput(2020, 11))

  it('adjacent corner', () => {
    const adjacents = Array.from(getAdjacents(demoData, 0, 0))
    deepEqual(adjacents, [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ])
  })
  it('adjacent middle', () => {
    const adjacents = Array.from(getAdjacents(demoData, 1, 1))
    deepEqual(adjacents, [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 0 },
      { x: 1, y: 2 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ])
  })
  // it('demo 2', () => {
  //   equal(solution1(data), 37)
  // })

  // it('solution 1', () => {
  //   equal(solution1(data), 2466)
  // })
})
