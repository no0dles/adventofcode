export function parse(content: string) {
  return content.split('\n').map((l) => parseInt(l, 0))
}

export function solution1(numbers: number[]): number {
  let count = 0
  let last = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > last) {
      count++
    }
    last = numbers[i]
  }
  return count
}

export function solution2(numbers: number[]): number {
  let count = 0
  let last = getSlidingWindowValue(numbers, 0)
  for (let i = 1; i + slidingWindow - 1 < numbers.length; i++) {
    const currentWindow = getSlidingWindowValue(numbers, i)
    if (currentWindow > last) {
      count++
    }
    last = currentWindow
  }

  return count
}

const slidingWindow = 3

function getSlidingWindowValue(numbers: number[], index: number) {
  let value = 0
  for (let w = 0; w < slidingWindow; w++) {
    value += numbers[index + w]
  }
  return value
}
