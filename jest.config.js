// https://jestjs.io/docs/en/configuration
// https://testing-library.com/docs/react-testing-library/intro
// https://testing-library.com/docs/ecosystem-jest-dom
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{spec,stories,test}.tsx',
    '!src/**/*.d.ts',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
};
