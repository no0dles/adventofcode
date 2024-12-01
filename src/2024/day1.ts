export function parse(text: string) {
  return text
    .split('\n')
    .filter(l => !!l)
    .map((line) => line.split('   ').map((text) => parseInt(text)))
    .reduce<{ left: number[]; right: number[] }>((result, item) => {
      result.left.push(item[0])
      result.right.push(item[1])
      return result
    }, {
      left: [],
      right: [],
    })
}

export function solution1(text: string) {
  const result = parse(text);

  result.left.sort()
  result.right.sort()

  return result.left
    .map((left, index) => Math.abs(left - result.right[index]))
    .reduce((sum, distance) => sum + distance, 0)
}

export function solution2(text: string) {
  const result = parse(text);

  return result.left
    .map(value =>  value * result.right.filter(right => right === value).length)
    .reduce((sum, value) => sum + value, 0)
}