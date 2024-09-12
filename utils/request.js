import store from "@/store/index.js";
import { removeLoginInfo } from "@/utils/auth";
import { validateToken } from "@/utils/validateToken";

const env = wx.getAccountInfoSync().miniProgram.envVersion;

const Hosts = {
	develop: "http://192.168.57.235:8082",
	trial: "http://192.168.57.235:8082",
	release: "http://192.168.57.235:8082",
};

const baseUrl = Hosts[env];

export function request(options) {
	let { method = "GET", data = {}, url, type } = options;

	let contentType = getContentType(type);

	let headers = {
		Accept: "application/json, text/plain, */*",
		"Content-Type": contentType,
	};

	let token = validateToken();
	if (token) {
		headers[token.tokenName] = token.tokenValue;
	}

	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method,
			header: headers,
			timeout: 20000,
			data,
			success(res) {
				resolve(res.data);
				// removeLoginInfo();
				// store.commit('user/resetUserInfo','');
				// uni.reLaunch({
				// 	url: '/pages/'
				// });
			},
			fail(err) {
				reject(err);
			},
		});
	});
}

// 获取请求头内容类型
function getContentType(type) {
	let contentType;
	switch (type) {
		case 1:
			contentType = "application/x-www-form-urlencoded";
			break;
		case 2:
			contentType = "multipart/form-data";
			break;
		default:
			contentType = "application/json;charset=UTF-8";
	}
	return contentType;
}
