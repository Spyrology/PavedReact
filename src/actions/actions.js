import Auth from '../data/auth';

//action types
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'
export const USER_AUTH = 'USER_AUTH'
export const CLOSE_ALL_DETAILS = 'CLOSE_ALL_DETAILS'

//action creators

export function toggleDetails(id) {
	return {
		type: TOGGLE_DETAILS,
		oppId: id
	};
}

export function closeAllDetails() {
  return {
    type: CLOSE_ALL_DETAILS
  };
}

export function loadUserDetails(cb) {
	return dispatch => {
		return Auth.getCreds().then(
			(res) => {
			dispatch({
			 	type: USER_AUTH,
			  isAuth: res.data.authenticated
			});
			cb();
		});
	};
}

export function authUser(email, password) {
	return dispatch => {
		return Auth.authUser(email, password).then(
			(res) => {
			dispatch({
			 	type: USER_AUTH,
			  isAuth: res.data.success
			});
		});
	};
}