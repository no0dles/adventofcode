export function parse(text: string) {
  return text
    .split('\n')
    .filter((l) => !!l)
    .map((line) => {
      return line.split(' ').map((text) => parseInt(text))
    })
}

function pairwise<T>(array: T[]) {
  return array
    .map((value, index) => {
      if (index + 1 < array.length) {
        return [value, array[index + 1]]
      } else {
        return null
      }
    })
    .filter((v) => !!v)
}

function isValidReport(report: number[]) {
  const diffs = pairwise(report).map(([first, second]) => first - second)

  return (
    diffs.every((diff) => diff >= 1 && diff <= 3) ||
    diffs.every((diff) => diff <= -1 && diff >= -3)
  )
}

export function solution1(text: string) {
  return parse(text).filter((report) => isValidReport(report)).length
}

function reportVariants(report: number[]): number[][] {
  return report.reduce<number[][]>((array, _, index) => {
    return [...array, report.filter((_, ri) => ri !== index)]
  }, [])
}

export function solution2(text: string) {
  return parse(text).filter((report) =>
    reportVariants(report).some(isValidReport)
  ).length
}
