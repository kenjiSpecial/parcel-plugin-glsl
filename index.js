module.exports = function(bundler) {
    bundler.addAssetType('frag', require.resolve('./glsl-asset'));
    bundler.addAssetType('vert', require.resolve('./glsl-asset'));
    bundler.addAssetType('glsl', require.resolve('./glsl-asset'));
    bundler.addAssetType('vertex', require.resolve('./glsl-asset'));
    bundler.addAssetType('fragment', require.resolve('./glsl-asset'));
};
