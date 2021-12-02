export interface Instruction {
  type: 'acc' | 'jmp' | 'nop'
  value: number
}

export function parse(content: string) {
  return content
    .split('\n')
    .filter((s) => !!s)
    .map<Instruction>((l) => {
      const match = l.match(
        /(?<type>acc|jmp|nop) (?<operator>\+|-)(?<value>\d+)/
      )
      return {
        type: match.groups.type as any,
        value:
          (match.groups.operator === '+' ? 1 : -1) *
          parseInt(match.groups.value, 0),
      }
    })
}

export function runProgram(instructions: Instruction[]): number {
  return getAccumulator(instructions, [], 0, 0).acc
}

export function repairInstructions(instructions: Instruction[]): Instruction[] {
  for (const instruction of instructions) {
    if (instruction.type === 'nop' || instruction.type === 'jmp') {
      const index = instructions.indexOf(instruction)
      const newInstructions: Instruction[] = []
      if (index > 0) {
        newInstructions.push(...instructions.slice(0, index))
      }
      newInstructions.push({
        type: instruction.type === 'nop' ? 'jmp' : 'nop',
        value: instruction.value,
      })
      if (index < instructions.length - 1) {
        newInstructions.push(
          ...instructions.slice(index + 1, instructions.length)
        )
      }
      const result = getAccumulator(newInstructions, [], 0, 0)
      if (!result.loop) {
        return newInstructions
      }
    }
  }
  throw new Error('unable to find solution')
}

function getAccumulator(
  instructions: Instruction[],
  path: number[],
  nextIndex: number,
  acc: number
): { acc: number; loop: boolean } {
  if (path.indexOf(nextIndex) >= 0) {
    return { acc, loop: true }
  }
  if (instructions.length - 1 === nextIndex) {
    if (instructions[nextIndex].type === 'acc') {
      return { acc: acc + instructions[nextIndex].value, loop: false }
    }
    return { acc, loop: false }
  }

  path.push(nextIndex)
  const instruction = instructions[nextIndex]
  if (instruction.type === 'acc') {
    return getAccumulator(
      instructions,
      path,
      nextIndex + 1,
      acc + instruction.value
    )
  } else if (instruction.type === 'jmp') {
    return getAccumulator(
      instructions,
      path,
      nextIndex + instruction.value,
      acc
    )
  } else {
    return getAccumulator(instructions, path, nextIndex + 1, acc)
  }
}
