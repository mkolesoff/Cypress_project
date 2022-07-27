const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
        token: 'test'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
      // implement node event listeners here
    },
    
    baseUrl: 'https://dev-crm.okolo.app/'
  },
});
