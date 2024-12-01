export interface PasswordRule {
  num1: number
  num2: number
  character: string
  password: string
}

export function parse(content: string): PasswordRule[] {
  return content
    .toString()
    .split('\n')
    .filter((s) => !!s)
    .map((l) => {
      const match =
        /(?<num1>\d+)\-(?<num2>\d+) (?<character>[a-z]): (?<password>[a-z]+)/.exec(
          l
        )
      return {
        num1: parseInt(match.groups.num1, 0),
        num2: parseInt(match.groups.num2, 0),
        character: match.groups.character,
        password: match.groups.password,
      }
    })
}
export function solution1(data: PasswordRule[]) {
  return data.filter((e) => {
    const characterCount = e.password.split(e.character).length - 1
    return characterCount >= e.num1 && characterCount <= e.num2
  }).length
}

export function solution2(data: PasswordRule[]) {
  return data.filter((e) => {
    const firstMatch = e.password[e.num1 - 1] === e.character
    const secondMatch = e.password[e.num2 - 1] === e.character
    return (firstMatch && !secondMatch) || (!firstMatch && secondMatch)
  }).length
}
