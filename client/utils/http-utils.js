export default class HttpUtilsService {
	static reject(reason){
		return new Promise((resolve, reject) => {
			reject(reason);
		})
	}

	static resolve(payload){
		return new Promise((resolve) => {
			resolve(payload);
		})
	}
}