const { merge } = require('webpack-merge');

module.exports = (config) => {
	return merge(config, {
		resolve: {
			fallback: {
				fs: false,
			},
		},
	});
};
