import store from "../store"

export const validateToken = () => {
	if (store.state.user.token) {
		return {
			tokenName: store.state.user.tokenName,
			tokenValue: store.state.user.token
		}
	} else {
		return false
	}
}