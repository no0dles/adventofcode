interface Position {
  x: number
  y: number
}

interface ParsedLine {
  source: Position
  target: Position
}

function parsePosition(position: string): Position {
  const parts = position.split(',')
  return {
    x: parseInt(parts[0]),
    y: parseInt(parts[1]),
  }
}

export function parse(line: string): ParsedLine {
  const parts = line.split(' -> ')
  return {
    source: parsePosition(parts[0]),
    target: parsePosition(parts[1]),
  }
}

interface DirectionIterator {
  next(): boolean

  value(): number
}

function getIterator(source: number, target: number): DirectionIterator {
  let value = source
  if (source < target) {
    return {
      value: () => value,
      next(): boolean {
        value++
        return value <= target
      },
    }
  } else {
    return {
      value: () => value,
      next(): boolean {
        value--
        return value >= target
      },
    }
  }
}

export function* solution(line: ParsedLine): Generator<[number, number]> {
  const xIterator = getIterator(line.source.x, line.target.x)
  const yIterator = getIterator(line.source.y, line.target.y)
  do {
    yield [xIterator.value(), yIterator.value()]
  } while (xIterator.next() && yIterator.next())
}
