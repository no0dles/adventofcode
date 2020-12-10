export function parse(content: string) {
  return content
    .split('\n')
    .filter((s) => !!s)
    .map((l) => parseInt(l, 0))
}

export function getTargetJolts(input: number[]) {
  return input.reduce((prev, curr) => (prev > curr ? prev : curr), 0) + 3
}

function countDistances(sortedInput: number[], distance: number): number {
  let count = 0
  for (let i = 0; i < sortedInput.length - 1; i++) {
    if (sortedInput[i + 1] - sortedInput[i] === distance) {
      count++
    }
  }
  return count
}

export function solution1(input: number[]) {
  const lastAdapter = getTargetJolts(input)
  const sortedInput = [0, ...input.sort((a, b) => a - b), lastAdapter]
  return countDistances(sortedInput, 1) * countDistances(sortedInput, 3)
}

export function solution2(input: number[]) {
  const sortedInput = input.sort((a, b) => a - b)
  return countPermutation(sortedInput, 0)
}

function countPermutation(sortedInput: number[], index: number): number {
  if (index + 1 === sortedInput.length) {
    return 1
  }

  let count = 0
  for (let i = index + 1; i < sortedInput.length; i++) {
    if (sortedInput[i] - sortedInput[index] <= 3) {
      count += countPermutation(sortedInput, i)
    } else {
      break
    }
  }
  return count
}
