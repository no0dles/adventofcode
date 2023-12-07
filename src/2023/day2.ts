import {parseLineForPart2} from './day1';


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
