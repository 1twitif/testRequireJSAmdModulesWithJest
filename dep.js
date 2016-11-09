(()=> {
	const dependencies = [];
	const libEnv = function (dep) {

		const answer = 42;

		return {answer}; // exports
	};
	//AMD & CommonJS compatibility stuff
	// CommonJS
	if (typeof module !== 'undefined' && typeof require !== 'undefined'){
		module.exports = libEnv.apply(this, dependencies.map(require));
		module.exports.mockable = libEnv; // module loader with mockable dependencies
	}
	// AMD
	if (typeof define !== 'undefined') define(dependencies, libEnv);
})();
