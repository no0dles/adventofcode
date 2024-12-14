export interface Calculation {
  result: number
  values: number[]
}

export type Operator = 'mul' | 'plus' | 'concat'

export function parse(input: string): Calculation[] {
  return input.split('\n').map<Calculation>((l) => {
    const [result, operandText] = l.split(':')
    return {
      result: parseInt(result),
      values: operandText
        .split(' ')
        .filter((s) => !!s)
        .map((o) => parseInt(o)),
    }
  })
}

function sumSolutions(input: string, ops: Operator[]): number {
  const calculations = parse(input)

  let value = 0
  for (const calculation of calculations) {
    const variants = buildVariants(ops, calculation.values.length)
    for (const variant of variants) {
      const res = calculate(calculation.values, variant, calculation.result)
      if (res === calculation.result) {
        value += res
        break
      }
    }
  }

  return value
}

export function solution1(input: string): number {
  return sumSolutions(input, ['mul', 'plus'])
}

export function solution2(input: string): number {
  return sumSolutions(input, ['mul', 'plus', 'concat'])
}

function calculate(operants: number[], operators: Operator[], max: number) {
  let value = operants[0]

  for (let i = 1; i < operants.length; i++) {
    const operator = operators[i - 1];

    if (value > max) {
      return value;
    }

    if (operator === 'mul') {
      value = value * operants[i]
    } else if (operator === 'plus') {
      value = value + operants[i]
    } else if(operator === 'concat') {
      value = parseInt(`${value}${operants[i]}`)
    }
  }

  return value
}

export function buildVariants(ops: Operator[], n: number): Generator<Operator[]> {
  return generateVariants(ops, n - 1, [])
}

function * generateVariants(
  ops: Operator[],
  length: number,
  current: Operator[]
): Generator<Operator[]> {
  if (length === 0) {
    yield current
    return;
  }

  for (const op of ops) {
    for (const variant of generateVariants(ops, length - 1, [...current, op])) {
      yield variant;
    }
  }
}
