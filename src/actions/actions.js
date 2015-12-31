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
			(dataObj) => {
			dispatch({
			 	type: USER_AUTH,
			  isAuth: dataObj.data.authenticated
			});
			cb();
		});
	};
}