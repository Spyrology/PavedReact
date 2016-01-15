import axios from 'axios';

var Auth = {
    getCreds(){
      return axios.get('http://localhost:8000/creds', {withCredentials: true});
    },
    authUser(email, password) {
    	return axios.post('http://localhost:8000/auth', {email, password}, {withCredentials: true})
    },
    checkPaymentAndGetEval(companyID, evalID) {
    	return axios.get(`http://localhost:8000/opportunities/${companyID}/evaluation/${evalID}`, {withCredentials: true})
    },
    submitPayment(payment, companyID, evalID) {
    	return axios.post(`http://localhost:8000/opportunities/${companyID}/evaluation/${evalID}`, {payment}, {withCredentials: true})
    }
};

export default Auth;