module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testTimeout: 25000,
  testRegex: 'src/.*.spec.ts',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['src/**', '!coverage/**', '!src/**/*.spec.ts'],
  coverageReporters: ['json', 'html', 'lcov'],
}
