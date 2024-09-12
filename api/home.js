import { request } from '@/utils/request.js'

// xx
export const login = (data) => {
	return request({
		method: 'post',
		url: '/mall/wx/wxLogin',
		data,
	})
}