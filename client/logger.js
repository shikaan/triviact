import {Configuration} from './configuration';
import {LOG_LEVELS_BY_NAME} from './constants';

const logLevel = Configuration.logLevel || LOG_LEVELS_BY_NAME.INFO;

export default class Logger {
	static info(...args){
		if(logLevel >= LOG_LEVELS_BY_NAME.INFO )
			console.info(`[INFO]`, ...args)
	}

	static debug(...args){
		if(logLevel >= LOG_LEVELS_BY_NAME.DEBUG )
			console.log(`[DEBUG]`, ...args)
	}

	static warn(...args){
		if(logLevel >= LOG_LEVELS_BY_NAME.WARN )
			console.warn(`[WARN]`, ...args);
	}

	static error(...args){
		if(logLevel >= LOG_LEVELS_BY_NAME.ERROR )
			console.error(`[ERROR]`, ...args);
	}
}