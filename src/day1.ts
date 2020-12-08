function* nested(
  depth: number,
  items: number[]
): Generator<{
  sum: number
  multiply: number
  items: number[]
}> {
  for (let item of items) {
    if (depth === 0) {
      yield { sum: item, multiply: item, items: [item] }
    } else {
      for (let result of nested(depth - 1, items)) {
        if (result.items.indexOf(item) >= 0) {
          continue
        }
        yield {
          sum: result.sum + item,
          multiply: result.multiply * item,
          items: [...result.items, item],
        }
      }
    }
  }
}

const target = 2020

export function solution(depth: number, value: number[]) {
  for (const result of nested(depth, value)) {
    if (result.sum === target) {
      return result.items.reduce((res, i) => res * i, 1)
    }
  }
}

export function parse(content: string) {
  return content.split('\n').map((l) => parseInt(l, 0))
}
