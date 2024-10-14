const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js', 

    pageLoadTimeout: 120000,
  },
});
