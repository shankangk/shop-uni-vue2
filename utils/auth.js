export function getLoginInfo() {
	return uni.getStorageSync('loginInfo') ? JSON.parse(uni.getStorageSync('loginInfo')) : {}
}

export function setLoginInfo(loginInfo) {
	return uni.setStorageSync('loginInfo', JSON.stringify(loginInfo))
}

export function removeLoginInfo() {
	return uni.removeStorageSync('loginInfo')
}

export function getLoginToken() {
	return uni.getStorageSync('token') ? uni.getStorageSync('token') : ''
}

export function setLoginToken(token) {
	return uni.setStorageSync('token', token)
}

export function removeLoginToken() {
	return uni.removeStorageSync('token')
}