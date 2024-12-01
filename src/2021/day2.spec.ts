import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, solution1, solution2 } from './day2.js'
import { readInput } from '../shared.js'

describe('2021/day2', () => {
  const content = readInput(2021, 2)
  const demo = parse(
    'forward 5\n' +
      'down 5\n' +
      'forward 8\n' +
      'up 3\n' +
      'down 8\n' +
      'forward 2'
  )

  it('demo 1', () => {
    const result = solution1(demo)
    equal(result, 150)
  })

  it('demo 2', () => {
    const result = solution2(demo)
    equal(result, 900)
  })

  it('part 1', () => {
    equal(solution1(parse(content)), 1488669)
  })

  it('part 2', () => {
    equal(solution2(parse(content)), 1176514794)
  })
})
