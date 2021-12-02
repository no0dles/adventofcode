import fs from 'fs'
import path from 'path'

export function readInput(year: number, dayNumber: number) {
  const content = fs.readFileSync(
    path.join(process.cwd(), `assets/${year}/day${dayNumber}.txt`)
  )
  return content.toString()
}
