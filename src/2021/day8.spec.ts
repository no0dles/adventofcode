import {parse, solution1, solution2} from './day8';
import { readInput } from '../shared'

describe('2021/day8', () => {
  const content = readInput(2021, 8)
  const demo = parse('be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | ' +
    'fdgacbe cefdb cefbgd gcbe\n' +
    'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | ' +
    'fcgedb cgb dgebacf gc\n' +
    'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | ' +
    'cg cg fdcagb cbg\n' +
    'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | ' +
    'efabcd cedba gadfec cb\n' +
    'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | ' +
    'gecf egdcabf bgf bfgea\n' +
    'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | ' +
    'gebdcfa ecba ca fadegcb\n' +
    'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | ' +
    'cefg dcbef fcge gbcadfe\n' +
    'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ' +
    'ed bcgafe cdgba cbgef\n' +
    'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | ' +
    'gbdfcae bgc cg cgb\n' +
    'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | ' +
    'fgae cfgab fg bagce')

  it('demo 1', () => {
    const result = solution1(demo)
    expect(result).toBe(26)
  })

  it('demo 2', () => {
    const result = solution2(demo)
    expect(result).toBe(61229)
  })

  it('part 1', () => {
    expect(solution1(parse(content))).toBe(247)
  })

  it('part 2', () => {
    expect(solution2(parse(content))).toBe(933305)
  })
})
