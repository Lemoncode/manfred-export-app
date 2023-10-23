export default {
  rootDir: '../../',
  verbose: true,
  restoreMocks: true,
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  preset: 'ts-jest',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/config/mocks/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
