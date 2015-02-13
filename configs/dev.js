var config = require('bedrock').config;
var path = require('path');

// core
// 0 means use # of cpus
config.core.workers = 1;
config.core.master.title = 'bedrock1d';
config.core.worker.title = 'bedrock1d-worker';
config.core.worker.restart = false;

// logging
config.loggers.app.filename = '/tmp/bedrock-dev-app.log';
config.loggers.access.filename = '/tmp/bedrock-dev-access.log';
config.loggers.error.filename = '/tmp/bedrock-dev-error.log';
config.loggers.email.silent = true;

// server info
config.server.port = 18443;
config.server.httpPort = 18080;
config.server.bindAddr = ['bedrock.dev'];
config.server.domain = 'bedrock.dev';
config.server.host = 'bedrock.dev:18443';
config.server.baseUri = 'https://' + config.server.host;

// session info
config.express.session.secret = '0123456789abcdef';
config.express.session.key = 'bedrock.sid';
config.express.session.prefix = 'bedrock.';

// express static resource config
//config.express.static = [__dirname + '/../site/static'];
config.express.staticOptions = {
  maxAge: config.express.cache.maxAge
};

// mongodb config
config.mongodb.name = 'bedrock_dev';
config.mongodb.host = 'localhost';
config.mongodb.port = 27017;
config.mongodb.local.collection = 'bedrock_dev';

// mail config
config.mail.connection = {
  host: 'localhost',
  ssl: false
};
config.mail.send = false;
config.mail.vars = {
  productionMode: config.views.vars.productionMode,
  baseUri: config.server.baseUri,
  subject: {
    prefix: '[Bedrock DEV] ',
    identityPrefix: '[Bedrock DEV] '
  },
  service: {
    name: 'Bedrock Development',
    host: config.server.host
  },
  system: {
    name: 'System',
    email: 'cluster@' + config.server.domain
  },
  support: {
    name: 'Customer Support',
    email: 'support@' + config.server.domain
  },
  registration: {
    email: 'registration@' + config.server.domain
  },
  comments: {
    email: 'comments@' + config.server.domain
  },
  machine: require('os').hostname()
};

// use CORS for static vocabs and contexts
config.express.static.push({
  route: '/vocabs',
  path: path.join(__dirname, 'vocabs'),
  cors: true
});
config.express.static.push({
  route: '/contexts',
  path: path.join(__dirname, 'contexts'),
  cors: true
});
