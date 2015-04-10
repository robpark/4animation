/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'animation',
    environment: environment,
    baseURL: '/',
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
    }
  };

  var contentSrc = "'self'";
  var scriptSrc = "'self'";
  var styleSrc = "'self'";
  var objectSrc = "*";

  if (environment === 'development') {
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    contentSrc = "*";
    scriptSrc = "'self' 'unsafe-eval' 'unsafe-inline' *";
    styleSrc = "'self' 'unsafe-inline'";
    objectSrc = "*";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': scriptSrc,
    'font-src': "'self'",
    'connect-src': contentSrc,
    'img-src': "'self' data:",
    'style-src': styleSrc,
    'media-src': "'self'",
    'object-src': objectSrc
  };

  return ENV;
};
