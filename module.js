(()=> {
	const dependencies = ['./dep.js'];
	const libEnv = function (dep) {
	
		// lib content
		function theAnswer (){
			return dep.answer;
		}
		
		return {theAnswer}; // exports
		
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
