module.exports = {
  name: "tc",
  verbose: true,
  setupFiles: ["<rootDir>/spec/support/enzyme_setup.js"],
  modulePaths: [
    "Components",
  ],
  moduleDirectories: [
    "node_modules",
  ],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/spec/support/style_mock.js",
    "\\.(jpg|png|gif)$": "<rootDir>/spec/support/asset_mock.js",
  },
  testPathIgnorePatterns: [
    "/node_modules/"
  ]
}
