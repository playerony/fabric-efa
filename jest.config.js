const mapPathsFromTsConfig = require('jest-module-name-mapper').default;

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: mapPathsFromTsConfig(),
  modulePathIgnorePatterns: ['node_modules'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/src/infrastructure/jest/setup-tests.ts'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
};
