import camelcase from 'lodash.camelcase';

const Configuration = (() => {
	let Configuration = {};

	for(let key in CONFIGURATION) {
		Configuration[camelcase(key)] = CONFIGURATION[key];
	}

	return Configuration;
})();

export {Configuration};