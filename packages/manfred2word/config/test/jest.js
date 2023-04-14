export default {
  rootDir: '../../',
  verbose: true,
  restoreMocks: true,
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  preset: 'ts-jest',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
