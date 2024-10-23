module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@rneui/*)',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'module.ts'],
  cacheDirectory: '.jest/cache',
};
