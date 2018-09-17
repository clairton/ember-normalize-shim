/* eslint-env node */
'use strict';

// var path = require('path');
// var stew = require('broccoli-stew');

// module.exports = {
//   name: 'ember-normalize-shim',

//   treeForVendor: function() {
//     return stew.find(path.join(path.dirname(require.resolve('normalize.css')), '..'), {
//       destDir: 'normalize',
//       files: ['normalize.css']
//     });
//   },

//   included(app) {
//     this._super.included.apply(this, arguments);
//     app.import('vendor/normalize.css/normalize.css');
//   }
// };

// var path = require('path');
// var Funnel = require('broccoli-funnel');
// var MergeTrees = require('broccoli-merge-trees');

// module.exports = {
//   name: 'ember-normalize-shim',

//   treeForVendor(vendorTree) {
//     var normalizeTree = new Funnel(
//       path.join(this.project.root, 'node_modules', 'normalize.css'), {
//       files: ['normalize.css'],
//     });

//     return new MergeTrees([vendorTree, normalizeTree]);
//   },

//   included(app) {
//     this._super.included.apply(this, arguments);
//     app.import('vendor/normalize.css/normalize.css');
//   }
// };

/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-normalize-shim',

  treeForStyles: function() {
    var normalizePath = path.join(this.project.nodeModulesPath, 'normalize.css');
    var normalizeTree = new Funnel(this.treeGenerator(normalizePath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return normalizeTree;
  }
};
