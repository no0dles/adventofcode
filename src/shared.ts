import fs from 'fs'
import path from 'path'

export function readInput(dayNumber: number) {
  const content = fs.readFileSync(
    path.join(process.cwd(), `assets/day${dayNumber}.txt`)
  )
  return content.toString()
}
