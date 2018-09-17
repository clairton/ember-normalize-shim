/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = (defaults) => {
  const app = new EmberAddon(defaults);

  return app.toTree();
};
