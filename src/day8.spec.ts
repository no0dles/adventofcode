import { parse, repairInstructions, runProgram } from './day8'
import { readInput } from './shared'

describe('day8', () => {
  it('demo part 1', () => {
    const content =
      'nop +0\n' +
      'acc +1\n' +
      'jmp +4\n' +
      'acc +3\n' +
      'jmp -3\n' +
      'acc -99\n' +
      'acc +1\n' +
      'jmp -4\n' +
      'acc +6'
    const instructions = parse(content)
    expect(runProgram(instructions)).toBe(5)
  })

  it('part 1', () => {
    const content = readInput(8)
    const instructions = parse(content)
    expect(runProgram(instructions)).toBe(1814)
  })

  it('demo part 2', () => {
    const content =
      'nop +0\n' +
      'acc +1\n' +
      'jmp +4\n' +
      'acc +3\n' +
      'jmp -3\n' +
      'acc -99\n' +
      'acc +1\n' +
      'jmp -4\n' +
      'acc +6'
    const instructions = parse(content)
    const fixedInstructions = repairInstructions(instructions)
    expect(runProgram(fixedInstructions)).toBe(8)
  })

  it('part 2', () => {
    const content = readInput(8)
    const instructions = parse(content)
    const fixedInstructions = repairInstructions(instructions)
    expect(runProgram(fixedInstructions)).toBe(1056)
  })
})
