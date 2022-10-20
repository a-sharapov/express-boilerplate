process.env.NODE_ENV = "test";

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.{spec,test}.{js,ts}"],
  preset: "ts-jest",
};
