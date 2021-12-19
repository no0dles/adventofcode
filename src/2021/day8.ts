export interface Parsed {
  input: string[];
  output: string[];
}

const numbers = {
  2: [1],
  3: [7],
  4: [4],
  5: [2, 3, 5],
  6: [0, 6, 9],
  7: [8],
};
const uniqueNumbers = Object.keys(numbers)
  .filter(key => numbers[key].length === 1)
  .map(l => parseInt(l, 0));

export function parse(content: string): Parsed[] {
  return content.split('\n')
    .filter(s => !!s)
    .map(line => {
      const parts = line.split(' | ');
      return {
        input: parts[0].split(' ').map(sortString),
        output: parts[1].split(' ').map(sortString),
      };
    });
}

function sortString(val: string) {
  return val.split('').sort().join('')
}

export function solution1(lines: Parsed[]): number {
  return lines.reduce((count, line) => {
    return count + line.output.filter(o => uniqueNumbers.indexOf(o.length) >= 0).length;
  }, 0);
}

function hasChars(value: string, chars: string) {
  return chars.split('').every(c => value.indexOf(c) >= 0)
}

export function solution2(lines: Parsed[]): number {
  return lines.reduce((count, line) => {
    const one = line.input.find(i => i.length === 2)
    const seven = line.input.find(i => i.length === 3)
    const four = line.input.find(i => i.length === 4)
    const eight = line.input.find(i => i.length === 7)

    const sixDigits = line.input.filter(i => i.length === 6);
    const fiveDigits = line.input.filter(i => i.length === 5);

    const fourMinusSevenChars = four.split('').filter(c => one.indexOf(c) === -1).join('')

    const nine = sixDigits.find(i => hasChars(i, seven) && hasChars(i, fourMinusSevenChars))
    const zero = sixDigits.find(i => hasChars(i, seven) && i !== nine)
    const six = sixDigits.find(i => i !== nine && i !== zero)

    const three = fiveDigits.find(i => hasChars(i, seven))
    const five = fiveDigits.find(i => hasChars(i, fourMinusSevenChars))
    const two = fiveDigits.find(i => i !== five && i !== three)

    const numbers = [zero,one,two,three,four,five,six,seven,eight,nine]

    return count + line.output.reduce((total, output, index) => {
      return total + numbers.indexOf(output) * Math.pow(10, (3-index))
    }, 0);
  }, 0)
}