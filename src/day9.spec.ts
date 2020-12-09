import { readInput } from './shared'
import { parse, solution1, solution2 } from './day9'

describe('day9', () => {
  const data = parse(readInput(9))

  it('demo 1', () => {
    const demo = parse(
      '35\n' +
        '20\n' +
        '15\n' +
        '25\n' +
        '47\n' +
        '40\n' +
        '62\n' +
        '55\n' +
        '65\n' +
        '95\n' +
        '102\n' +
        '117\n' +
        '150\n' +
        '182\n' +
        '127\n' +
        '219\n' +
        '299\n' +
        '277\n' +
        '309\n' +
        '576'
    )
    const result = solution1(demo, 5)
    expect(result).toBe(127)
  })

  it('part 1', () => {
    const result = solution1(data, 25)
    expect(result).toBe(21806024)
  })

  it('demo 2', () => {
    const demo = parse(
      '35\n' +
        '20\n' +
        '15\n' +
        '25\n' +
        '47\n' +
        '40\n' +
        '62\n' +
        '55\n' +
        '65\n' +
        '95\n' +
        '102\n' +
        '117\n' +
        '150\n' +
        '182\n' +
        '127\n' +
        '219\n' +
        '299\n' +
        '277\n' +
        '309\n' +
        '576'
    )
    const result = solution2(demo, 5)
    expect(result).toBe(62)
  })

  it('part 2', () => {
    const result = solution2(data, 25)
    expect(result).toBe(2986195)
  })
})
