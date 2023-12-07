export function parse(content: string) {
  return content.split('\n').filter(l => !!l)
}

export function solution1(lines: string[]): number {
  return lines.reduce((sum, line) => {
   const result = line.match(/\d/g)
    return sum + parseInt(result[0] + result[result.length-1])
  }, 0);
}

export function solution2(lines: string[]): number {
  return lines.reduce((sum, line) => {
    return sum + parseLineForPart2(line)
  }, 0);
}

export function parseLineForPart2(line: string) {
  const result = Array.from(line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g))
    .map(v => v.filter(v => !!v));
  return parseInt(mapValue(result[0][0]) + mapValue(result[result.length-1][result[result.length-1].length-1]))
}

function mapValue(value: string): string {
  switch (value) {
    case 'one':
      return '1'
    case 'two':
      return '2'
    case 'three':
      return '3'
    case 'four':
      return '4'
    case 'five':
      return '5'
    case 'six':
      return '6'
    case 'seven':
      return '7'
    case 'eight':
      return '8'
    case 'nine':
      return '9'
    default:
      return value
  }
}
