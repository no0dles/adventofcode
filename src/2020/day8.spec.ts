import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { parse, repairInstructions, runProgram } from './day8.js'
import { readInput } from '../shared.js'

describe('2020/day8', () => {
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
    equal(runProgram(instructions), 5)
  })

  it('part 1', () => {
    const content = readInput(2020, 8)
    const instructions = parse(content)
    equal(runProgram(instructions), 1814)
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
    equal(runProgram(fixedInstructions), 8)
  })

  it('part 2', () => {
    const content = readInput(2020, 8)
    const instructions = parse(content)
    const fixedInstructions = repairInstructions(instructions)
    equal(runProgram(fixedInstructions), 1056)
  })
})
