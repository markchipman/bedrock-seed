/*
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');

// bedrock modules to load
require('bedrock-express');
require('bedrock-docs');
require('bedrock-identity');
require('bedrock-idp');
require('bedrock-i18n');
require('bedrock-jobs');
require('bedrock-mail');
require('bedrock-mongodb');
require('bedrock-passport');
require('bedrock-permission');
require('bedrock-protractor');
require('bedrock-request-limiter');
require('bedrock-requirejs');
require('bedrock-rest');
require('bedrock-server');
require('bedrock-session-mongodb');
require('bedrock-validation');
require('bedrock-views');

// load local config
require('./configs/dev');

// add dev data
bedrock.events.on('bedrock.configure', function() {
  require('./configs/roles');
  require('./configs/common-data');
  require('./configs/dev-data');
});

// configure for tests
bedrock.events.on('bedrock.test.configure', function() {
  require('./configs/test');
});

bedrock.start();
