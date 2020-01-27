module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js)$",
  transform: {
    "^.+\\.js?$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js"
  }
};
