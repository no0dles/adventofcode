interface Passport {
  eyr?: number
  pid?: string
  hgt?: string
  hcl?: string
  iyr?: number
  ecl?: string
  byr?: number
}

const numberKeys = ['eyr', 'byr', 'iyr']
const validBirthYear = (year) => year >= 1920 && year <= 2002
const validIssueYear = (year) => year >= 2010 && year <= 2020
const validExpirationYear = (year) => year >= 2020 && year <= 2030
const validHairColor = (color) => /^#[a-f0-9]{6}$/.test(color)
const validPassportId = (id) => /^[0-9]{9}$/.test(id)
const validEyeColor = (color) =>
  ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(color) >= 0
const validHeight = (height) => {
  const match = /^(?<size>[0-9]+)(?<unit>cm|in)$/.exec(height)
  const unit = match?.groups?.unit
  const size = parseInt(match?.groups?.size)
  return (
    (unit === 'in' && size >= 59 && size <= 76) ||
    (unit === 'cm' && size >= 150 && size <= 193)
  )
}

export function parse(content: string) {
  return content
    .toString()
    .split('\n\n')
    .map((p) =>
      p
        .split(/[\s\n]/g)
        .map((v) => v.split(':'))
        .reduce<Passport>((passport, [key, value]) => {
          if (numberKeys.indexOf(key) >= 0) {
            passport[key] = parseInt(value)
          } else {
            passport[key] = value
          }
          return passport
        }, {})
    )
}

export function solution1(input: Passport[]) {
  return input.filter(
    (p) => p.byr && p.iyr && p.eyr && p.hgt && p.hcl && p.ecl && p.pid
  ).length
}

export function solution2(input: Passport[]) {
  return input.filter(
    (p) =>
      validBirthYear(p.byr) &&
      validIssueYear(p.iyr) &&
      validExpirationYear(p.eyr) &&
      validHeight(p.hgt) &&
      validHairColor(p.hcl) &&
      validEyeColor(p.ecl) &&
      validPassportId(p.pid)
  ).length
}
