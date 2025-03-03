// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress"
// eslint-disable-next-line import/no-extraneous-dependencies
import cypressSplit from "cypress-split"

import { register } from "@cypress/snapshot";

register();

export default defineConfig({
  e2e: {
    env: {
      visualRegressionType: process.env.VISUAL_REGRESSION_TYPE ?? "regression",
      visualRegressionGenerateDiff: "always",
      visualRegressionFailSilently: false
    },
    baseUrl: "http://localhost:4002",
    supportFile: "cypress/support/e2e.js",
    video: true,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      return config
    },
    projectId: "2ns45q",
    pageLoadTimeout: 120000
  }
})
