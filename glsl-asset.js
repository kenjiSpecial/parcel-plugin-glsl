const { Asset } = require('parcel-bundler');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

module.exports = class GLSLAsset extends JSAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  generate() {
    return { js: `module.exports = \`${this.contents}\`` };
  }
};
