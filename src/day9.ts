export function parse(content: string) {
  return content
    .split('\n')
    .filter((s) => !!s)
    .map((l) => parseInt(l, 0))
}

export function solution1(input: number[], preambleSize: number): number {
  const preamble: number[] = input.slice(0, preambleSize)
  for (let i = preambleSize; i < input.length; i++) {
    const num = input[i]
    if (!containsSum(num, preamble)) {
      return num
    }

    preamble.splice(0, 1)
    preamble.push(num)
  }

  throw new Error('unable to find solution')
}

export function solution2(input: number[], preambleSize: number): number {
  const target = solution1(input, preambleSize)

  const output: number[] = []
  for (let i = 0; i < input.length; i++) {
    output.push(input[i])
    while (sum(output) > target) {
      output.splice(0, 1)
    }
    if (sum(output) === target) {
      return max(output) + min(output)
    }
  }
  throw new Error('unable to find solution')
}

function min(items: number[]) {
  return items.reduce((prev, curr) => (prev > curr ? curr : prev), items[0])
}

function max(items: number[]) {
  return items.reduce((prev, curr) => (prev > curr ? prev : curr), items[0])
}

function sum(items: number[]) {
  return items.reduce((prev, curr) => prev + curr, 0)
}

function containsSum(sum: number, items: number[]): boolean {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (i === j || items[i] === items[j]) {
        continue
      }
      if (sum === items[i] + items[j]) {
        return true
      }
    }
  }
  return false
}
