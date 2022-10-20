module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

   coverageReporters: [
     "json",
     "text",
     "lcov",
     "clover"
   ],
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
    testEnvironment: "jsdom",
}
