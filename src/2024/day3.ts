export function parse(
  text: string
): { type: 'mul' | 'do' | "don't"; value: undefined | number }[] {
  return Array.from(
    text.matchAll(
      /(?<operation>(do|don't|mul))\((?:(?<value1>\d+),(?<value2>\d+))?\)/g
    )
  ).map((m) => {
    return {
      type: m.groups['operation'] as 'mul' | 'do' | "don't",
      value:
        'value1' in m.groups && 'value2' in m.groups
          ? parseInt(m.groups['value1']) * parseInt(m.groups['value2'])
          : undefined,
    }
  })
}

export function solution1(text: string) {
  return parse(text).reduce(
    (sum, value) => (value.type === 'mul' ? sum + value.value : sum),
    0
  )
}

export function solution2(text: string) {
  return parse(text).reduce<{ sum: number; do: boolean }>(
    (aggregation, value) => ({
      sum:
        aggregation.do && value.type === 'mul'
          ? aggregation.sum + value.value
          : aggregation.sum,
      do:
        value.type === 'do'
          ? true
          : value.type === "don't"
            ? false
            : aggregation.do,
    }),
    { sum: 0, do: true }
  ).sum
}
