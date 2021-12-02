export type SeatState = 'L' | '#' | '.'

export interface PlaneSeats {
  [key: string]: SeatState
}

export interface Plane {
  seats: PlaneSeats
  width: number
  height: number
}

function getKey(x: number, y: number, width: number) {
  return `${y * width + x}`
}

export function parse(content: string): Plane {
  const lines = content.split('\n').map((l) => l.split('')) as SeatState[][]
  const width = lines[0].length
  const height = lines.length

  const plane: Plane = {
    seats: {},
    width,
    height,
  }
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      plane.seats[getKey(x, y, width)] = lines[y][x]
    }
  }
  return plane
}

export function* getAdjacents(plane: Plane, x: number, y: number) {
  const adjacents = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  for (const adjacent of adjacents) {
    const adjacentX = x + adjacent[0]
    const adjacentY = y + adjacent[1]
    if (
      adjacentX >= 0 &&
      adjacentX < plane.width &&
      adjacentY >= 0 &&
      adjacentY < plane.height
    ) {
      yield { x: adjacentX, y: adjacentY }
    }
  }
}

function update(plane: Plane): boolean {
  const newSeats: PlaneSeats = {}
  let changed = false
  for (let y = 0; y < plane.height; y++) {
    for (let x = 0; x < plane.width; x++) {
      const key = getKey(x, y, plane.width)
      const seat = plane.seats[key]
      if (seat === '.') {
        newSeats[key] = '.'
        continue
      }

      let adjacentSeatedCount = 0
      for (const adjacent of getAdjacents(plane, x, y)) {
        const adjacentKey = getKey(adjacent.x, adjacent.y, plane.width)
        if (plane.seats[adjacentKey] === '#') {
          adjacentSeatedCount++
        }
      }

      if (adjacentSeatedCount === 0) {
        newSeats[key] = '#'
      } else if (plane.seats[key] === '#' && adjacentSeatedCount >= 4) {
        newSeats[key] = 'L'
      } else {
        newSeats[key] = plane.seats[key]
      }

      if (newSeats[key] !== plane.seats[key]) {
        changed = true
      }
    }
  }

  plane.seats = newSeats
  return changed
}

export function solution1(plane: Plane) {
  let count = 0
  while (update(plane)) {
    count++
  }
  return Object.keys(plane.seats).filter((key) => plane.seats[key] === '#')
    .length
}
