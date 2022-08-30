const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  
  projectId: "7afuur",
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      //Cucumber preprocessor integration command 
      on('file:preprocessor', cucumber())
    },
    //specPattern : 'cypress/integration/examples/BDD/*.feature',
    specPattern : 'cypress/integration/examples/BDD/*.feature',
    reporter : 'mochawesome',
    execTimeout: 800000,
    defaultCommandTimeout: 60000,
    viewportHeight: 768,
    viewportWidth: 1400,
    reporter: 'cypress-mochawesome-reporter',
    chromeWebSecurity: false
  },
});
