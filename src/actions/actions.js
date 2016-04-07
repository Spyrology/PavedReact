import Auth from '../data/auth';
import oppsSource from '../data/opportunities';

//special values
export const paymentstatus = {
	HAS_PAID: 'has paid',
	NOT_PAID: 'not paid',
	PENDING: 'pending' 
}

//action types
export const LOAD_OPPS = 'LOAD_OPPS'
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'
export const USER_AUTH = 'USER_AUTH'
export const CLOSE_ALL_DETAILS = 'CLOSE_ALL_DETAILS'
export const HAS_PURCHASED = 'HAS_PURCHASED'
export const EVAL_DETAILS = 'EVAL_DETAILS'

//action creators

export function loadOpps() {
	return dispatch => {
		return oppsSource.getOpps().then(
			(dataObj) => {
				var oppArray = dataObj.data
				dispatch({
				 	type: LOAD_OPPS,
				  data: oppArray
				});
		});
	};
};


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

export function signUpUser(firstname, lastname, email, password, confirmpassword) {
	return dispatch => {
		return Auth.signUpUser(firstname, lastname, email, password, confirmpassword).then(
			(res) => {
			dispatch({
			 	type: USER_AUTH,
			  isAuth: res.data.success
			});
		});
	};
}

export function checkPaymentAndGetEval(companyID, evalID) {
	return dispatch => {
		dispatch({
			type: HAS_PURCHASED,
			hasPurchased: paymentstatus.PENDING,
			evalID: evalID
		});
		return Auth.checkPaymentAndGetEval(companyID, evalID).then(
			(res) => {
				dispatch({
				 	type: HAS_PURCHASED,
				  hasPurchased: res.data.hasPurchased ? paymentstatus.HAS_PAID : paymentstatus.NOT_PAID,
				  evalID: evalID
				});
				dispatch({
				 	type: EVAL_DETAILS,
				  evalDetails: res.data.evalDetails,
				  evalID: evalID
				});
			}
		);
	};
}

export function submitPayment(token, companyID, evalID) {
	return dispatch => {
		return Auth.submitPayment(token, companyID, evalID).then(
			(res) => {
				if (res.data.success === false) {
					return {success: false}
				} else {
					dispatch({
					 	type: HAS_PURCHASED,
					  hasPurchased: res.data.hasPurchased ? paymentstatus.HAS_PAID : paymentstatus.NOT_PAID,
					  evalID: evalID
					});
					dispatch({
					 	type: EVAL_DETAILS,
					  evalDetails: res.data.evalDetails,
					  evalID: evalID
					});
					return { success: true };
				}
			}
		);
	}
}