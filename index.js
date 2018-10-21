module.exports = function(api) {
	api.assertVersion(7);

	return { 
		presets: [
			[require('@babel/preset-env'), { modules: false }]
		],
		plugins: [require( '@babel/plugin-external-helpers' )]
	 };
}
