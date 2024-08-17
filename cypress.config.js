const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    video: true, // Enable video recording
    screenshotsFolder: "cypress/screenshots", // Folder where screenshots will be saved
    videosFolder: "cypress/videos", // Folder where videos will be saved
    screenshotOnRunFailure: true, // Capture screenshots on test failure
    videoCompression: 0, // Set video compression (0 for no compression, higher numbers for more compression)
  },
});
