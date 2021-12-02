export function parse(content: string) {
  const numbers = content
    .split('\n')
    .filter((s) => !!s)
    .map((l) => parseInt(l, 0))

  const max = getTargetJolts(numbers)
  return [0, ...numbers.sort((a, b) => a - b), max]
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
  return countDistances(input, 1) * countDistances(input, 3)
}

export function solution2(input: number[]) {
  return countPermutation(input, 0, {})
}

function countPermutation(
  sortedInput: number[],
  index: number,
  cache: { [key: string]: number }
): number {
  if (index + 1 === sortedInput.length) {
    return 1
  }
  if (cache[index]) {
    return cache[index]
  }

  let count = 0
  for (let i = index + 1; i < sortedInput.length; i++) {
    if (sortedInput[i] - sortedInput[index] <= 3) {
      count += countPermutation(sortedInput, i, cache)
    }
  }
  cache[index] = count
  return count
}
