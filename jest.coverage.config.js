process.env.NODE_ENV = "test";

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts}", "!src/**/*.d.ts"],
  coverageDirectory: "<rootDir>/test/coverage",
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.{spec,test}.{js,ts}"],
  preset: "ts-jest",
};
