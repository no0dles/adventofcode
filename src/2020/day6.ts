export interface Group {
  [key: string]: boolean
}

export function parse(content: string): Group[][] {
  return content
    .toString()
    .split('\n\n')
    .map((l) =>
      l
        .split('\n')
        .filter((s) => !!s)
        .map((c) =>
          c.split('').reduce((map, c) => {
            map[c] = true
            return map
          }, {})
        )
    )
}

function getSum(
  input: Group[][],
  filter: (answerCount: number, groupEntriesCount: number) => boolean
) {
  return input.reduce((sum, groups) => {
    const mergedGroup = groups.reduce<{ [key: string]: number }>(
      (map, group) => {
        for (const key of Object.keys(group)) {
          if (map[key] === undefined) {
            map[key] = 1
          } else {
            map[key]++
          }
        }
        return map
      },
      {}
    )
    return (
      sum +
      Object.keys(mergedGroup).filter((key) =>
        filter(mergedGroup[key], groups.length)
      ).length
    )
  }, 0)
}

export function solution1(input: Group[][]) {
  return getSum(input, () => true)
}

export function solution2(input: Group[][]) {
  return getSum(
    input,
    (answerCount, groupEntriesCount) => answerCount === groupEntriesCount
  )
}
