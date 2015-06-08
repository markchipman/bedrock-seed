var config = require('bedrock').config;

// identity config
config.idp.defaults.identity.address = [];
config.idp.defaults.identity.preferences = {
  type: 'IdentityPreferences'
};
config.idp.defaults.identity.sysPublic = [];
config.idp.defaults.identity.sysResourceRole = [{
  sysRole: 'identity.registered',
  generateResource: 'id'
}];
