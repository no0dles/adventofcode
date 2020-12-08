export interface Rule {
  name: string
  contains: { [key: string]: number }
}

export interface BagMap {
  [key: string]: { [key: string]: number }
}

const endRegex = /^(?<name>\w+ \w+) bags contain no other bags\.$/
const nameRegex = /^(?<name>\w+ \w+) bags contain/
const containRegex = /(?<count>\d+) (?<name>\w+ \w+) bag(s)*/g
const targetBag = 'shiny gold'

export function parse(content: string): BagMap {
  const rules = content
    .toString()
    .split('\n')
    .filter((s) => !!s)
    .map<Rule>((line) => {
      const endMatch = line.match(endRegex)
      const nameMatch = line.match(nameRegex)
      if (endMatch) {
        return { name: endMatch.groups.name, contains: {} }
      } else if (nameMatch) {
        const contains: { [key: string]: number } = {}
        for (const containMatch of line.matchAll(containRegex)) {
          contains[containMatch.groups.name] = parseInt(
            containMatch.groups.count,
            0
          )
        }
        return {
          name: nameMatch.groups.name,
          contains,
        }
      } else {
        throw new Error('unable to parse ' + line)
      }
    })
  return rules.reduce<BagMap>((map, rule) => {
    map[rule.name] = rule.contains
    return map
  }, {})
}

function getBelowBagCount(bags: BagMap, bagName: string): number {
  const subBags = Object.keys(bags[bagName])
  let count = 0
  for (const subBag of subBags) {
    const subCount = getBelowBagCount(bags, subBag)
    count += bags[bagName][subBag] + bags[bagName][subBag] * subCount
  }
  return count
}

export function solution1(bags: BagMap) {
  const containsTargetBag: string[] = []
  let lastCount = 0
  do {
    lastCount = containsTargetBag.length
    for (let bagName of Object.keys(bags)) {
      if (containsTargetBag.indexOf(bagName) >= 0) {
        continue
      }

      if (bags[bagName][targetBag]) {
        containsTargetBag.push(bagName)
        continue
      }

      if (containsTargetBag.some((b) => bags[bagName][b])) {
        containsTargetBag.push(bagName)
        continue
      }
    }
  } while (lastCount !== containsTargetBag.length)
  return containsTargetBag.length
}

export function solution2(bags: BagMap) {
  return getBelowBagCount(bags, targetBag)
}
