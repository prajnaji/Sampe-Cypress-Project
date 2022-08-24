const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here

      //Cucumber preprocessor integration command 
      on('file:preprocessor', cucumber())
    },
    specPattern : 'cypress/integration/*.js',
    reporter : 'mochawesome'

     
  },
});
