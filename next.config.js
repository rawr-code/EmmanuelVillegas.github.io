const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages({
	/* config for next-optimized-images */
	// your config for other plugins or the general next.js here...
	optimizeImagesInDev: true,
	webpack(config) {
		config.resolve.alias.images = path.join(__dirname, 'public', 'images');
		return config;
	}
});
