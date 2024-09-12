// import { Logout } from '@/api/login'
import { getLoginInfo, getLoginToken } from "@/utils/auth"

const getDefaultState = () => {
	return {
		tokenName: 'Authorization',
		token: getLoginToken(),
		userInfo: getLoginInfo(),
	}
}

const state = getDefaultState()

const mutations = {
	setUserInfo(state, userInfo) {
		state.userInfo = userInfo
	},
	setToken(state, token) {
		state.token = token
	},
	resetUserInfo(state) {
		state.token = ''
		state.userInfo = {}
	},
};

const actions = {
	async logout({ commit, state }) {
		await Logout();
		return new Promise((resolve, reject) => {
			commit('resetUserInfo')
			resolve()
		})
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
}