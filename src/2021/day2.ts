export interface Directions {
  direction: Direction
  value: number
}

export type Direction = 'forward' | 'down' | 'up'

export function parse(content: string): Directions[] {
  return content.split('\n').map((l) => ({
    direction: l.split(' ')[0] as Direction,
    value: parseInt(l.split(' ')[1], 0),
  }))
}

export function solution1(directions: Directions[]): number {
  let x = 0,
    y = 0
  for (const direction of directions) {
    if (direction.direction === 'forward') {
      x += direction.value
    } else if (direction.direction === 'down') {
      y += direction.value
    } else if (direction.direction === 'up') {
      y -= direction.value
    }
  }
  return x * y
}

export function solution2(directions: Directions[]): number {
  let x = 0,
    y = 0,
    aim = 0
  for (const direction of directions) {
    if (direction.direction === 'forward') {
      x += direction.value
      y += aim * direction.value
    } else if (direction.direction === 'down') {
      aim += direction.value
    } else if (direction.direction === 'up') {
      aim -= direction.value
    }
  }
  return x * y
}
