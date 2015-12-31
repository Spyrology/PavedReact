import Auth from '../data/auth';

//action types
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'
export const USER_AUTH = 'USER_AUTH'

//action creators

export function toggleDetails(id) {
	return {
		type: TOGGLE_DETAILS,
		oppId: id
	};
}

export function loadUserDetails(cb) {
	return dispatch => {
		return Auth.getCreds().then(
			(dataObj) => {
			dispatch({
			 	type: USER_AUTH,
			  isAuth: dataObj.data.authenticated
			});
			cb();
		});
	};
}