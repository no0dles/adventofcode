import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { solution1, solution2 } from './day4.js'
import { readInput } from '../shared.js'

describe('2024/day4', () => {
  it('demo 1', () => {
    const demo = 'MMMSXXMASM\n' +
      'MSAMXMSMSA\n' +
      'AMXSXMAAMM\n' +
      'MSAMASMSMX\n' +
      'XMASAMXAMM\n' +
      'XXAMMXXAMA\n' +
      'SMSMSASXSS\n' +
      'SAXAMASAAA\n' +
      'MAMMMXMMMM\n' +
      'MXMXAXMASX';

    equal(solution1(demo), 18);
  })

  it('part 1', () => {
    equal(solution1(readInput(2024, 4)), 2493);
  })

  it('demo 2', () => {
    const demo = '.M.S......\n' +
      '..A..MSMS.\n' +
      '.M.S.MAA..\n' +
      '..A.ASMSM.\n' +
      '.M.S.M....\n' +
      '..........\n' +
      'S.S.S.S.S.\n' +
      '.A.A.A.A..\n' +
      'M.M.M.M.M.\n' +
      '..........';
    equal(solution2(demo), 9);
  })

  it('part 2', () => {
    equal(solution2(readInput(2024, 4)), 1890);
  })
})
