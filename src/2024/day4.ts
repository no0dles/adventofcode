export function parse(text: string): string[][] {
  return text.split('\n').map((m) => m.split(''))
}

interface Coordinate {
  x: number
  y: number
}

interface Dimension {
  w: number
  h: number
}

interface Movement {
  dx: number
  dy: number
}

function* gridCoordinates(dim: Coordinate & Dimension): Generator<Coordinate> {
  for (const x of generateNumbers(dim.x, dim.w - 1)) {
    for (const y of generateNumbers(dim.y, dim.h - 1)) {
      yield { x, y }
    }
  }
}

function* pairwise<T1, T2>(
  first: Generator<T1>,
  second: Generator<T2>
): Generator<[T1, T2]> {
  let done = false
  do {
    let v1 = first.next()
    let v2 = second.next()
    if (v1.done || v2.done) {
      done = true
      return
    }
    yield [v1.value, v2.value]
  } while (!done)
}

function* fromArray<T>(val: T[]): Generator<T> {
  for (const value of val) {
    yield value
  }
}

function getDirections(): Generator<Movement> {
  const directions = [
    { dx: 1, dy: 1 },
    { dx: -1, dy: -1 },

    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },

    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },

    { dx: 1, dy: -1 },
    { dx: -1, dy: 1 },
  ]
  return fromArray(directions)
}

function* diagonalDirections(): Generator<Movement> {
  for(const dir of getDirections()) {
    if(dir.dx !== 0 && dir.dy !== 0) {
      yield dir;
    }
  }
}

function* iterateDirection(
  start: Coordinate,
  movement: Movement,
  dim: Dimension
): Generator<Coordinate> {
  let current = { x: start.x + movement.dx, y: start.y + movement.dy }
  while (
    current.x >= 0 &&
    current.y >= 0 &&
    current.x < dim.w &&
    current.y < dim.h
  ) {
    yield { ...current }
    current.x += movement.dx
    current.y += movement.dy
  }
}

function* generateNumbers(min: number, max: number): Generator<number> {
  for (let i = min; i <= max; i++) {
    yield i
  }
}

function getChar(chars: string[][], coordinate: Coordinate): string {
  if (!chars[coordinate.x]) {
    throw new Error('unexpected coord')
  }
  return chars[coordinate.x][coordinate.y]
}

function * iterateDirections(start: Coordinate, dim: Dimension, directionsGen: () => Generator<Movement>) {
  for (const direction of directionsGen()) {
    yield iterateDirection(start, direction, dim)
  }
}

function* getWordCoordinates(
  chars: string[][],
  word: string,
  directionsGen: () => Generator<Movement>
): Generator<Coordinate[]> {
  const dim = {
    w: chars[0].length,
    h: chars.length,
  }

  const firstChar = word[0]
  const followingChars = word.split('').slice(1)

  for (const coordinate of gridCoordinates({ ...dim, x: 0, y: 0 })) {
    if (getChar(chars, coordinate) != firstChar) {
      continue
    }

    for (const direction of iterateDirections(coordinate, dim, directionsGen)) {
      const wordCoordinates: Coordinate[] = [coordinate]

      for (const [nextExpectedChar, charCoordinate] of pairwise(
        fromArray(followingChars),
        direction
      )) {
        const nextChar = getChar(chars, charCoordinate)
        if (nextChar === nextExpectedChar) {
          wordCoordinates.push(charCoordinate)
        } else {
          break
        }
      }

      if (wordCoordinates.length === word.length) {
        yield wordCoordinates
      }
    }
  }
}

export function solution1(text: string) {
  const chars = parse(text)

  let count = 0
  for (const _ of getWordCoordinates(chars, 'XMAS', getDirections)) {
    count++
  }

  return count
}

function compareCoordinate(first: Coordinate, second: Coordinate): boolean {
  return first.x === second.x && first.y === second.y
}

export function solution2(text: string) {
  const chars = parse(text)

  const masCoordinates: Coordinate[][] = []

  for (const coordinates of getWordCoordinates(chars, 'MAS', diagonalDirections)) {
    masCoordinates.push(coordinates)
  }

  return masCoordinates.filter((masCoordinate) => {
    const match = masCoordinates.find(
      (otherMasCoordinate) =>
        otherMasCoordinate !== masCoordinate &&
        compareCoordinate(otherMasCoordinate[1], masCoordinate[1])
    );
    return !!match;
  }).length / 2
}
