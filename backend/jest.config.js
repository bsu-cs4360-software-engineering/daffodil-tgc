module.exports = {
    // The directory where Jest should look for tests
    roots: ['<rootDir>/src/Models'],
  
    // The pattern to match test files
    testMatch: ['**/*.test.js', '**/*.spec.js', '**/card_unit_test.js'],
  
    // The pattern to ignore files
    testPathIgnorePatterns: ['/node_modules/'],
  
    // The module file extensions
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {

        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    
      },
  };