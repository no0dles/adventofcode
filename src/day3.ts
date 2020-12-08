export function parse(content: string) {
  return content.split('\n')
}

function traverse(lines: string[], vx: number, vy: number) {
  const width = lines[0].length
  return lines.reduce((count, line, index) => {
    return (
      count +
      (index % vy === 0
        ? line[((index * vx) / vy) % width] === '#'
          ? 1
          : 0
        : 0)
    )
  }, 0)
}

export function solution1(lines: string[]) {
  return traverse(lines, 3, 1)
}

export function solution2(lines: string[]) {
  return (
    traverse(lines, 1, 1) *
    traverse(lines, 3, 1) *
    traverse(lines, 5, 1) *
    traverse(lines, 7, 1) *
    traverse(lines, 1, 2)
  )
}
