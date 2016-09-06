/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'juguetes',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase:{
      apiKey: "AIzaSyBPdaEwhW3Q0K91h6tMbcVX6CguGr2ldbA",
      authDomain: "juguetitos-7b4aa.firebaseapp.com",
      databaseURL: "https://juguetitos-7b4aa.firebaseio.com",
      storageBucket: "juguetitos-7b4aa.appspot.com",
    },
    torii:{
      sessionServiceName: 'session'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
