import { defineConfig } from "cypress";

export default defineConfig({
  retries: {runMode:2},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
