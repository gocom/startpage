module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/vendor/**/*',
    '!src/components/**/*/main.js',
  ],
  moduleNameMapper: {
    '.*\\.(jpg|png|svg)$': '<rootDir>/tests/mocks/file.js',
    '.*\\.(css|less)$': '<rootDir>/tests/mocks/style.js',
  },
};
