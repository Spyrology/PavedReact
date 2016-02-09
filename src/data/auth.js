import axios from 'axios';

var Auth = {
    getCreds(){
      return axios.get('http://localhost:8000/creds', {withCredentials: true});
    },
    authUser(email, password) {
    	return axios.post('http://localhost:8000/login', {email, password}, {withCredentials: true})
    },
    signUpUser(firstname, lastname, email, password, confirmpassword) {
      return axios.post('http://localhost:8000/signup', {firstname, lastname, email, password, confirmpassword}, {withCredentials: true})
    },
    checkPaymentAndGetEval(companyID, evalID) {
    	return axios.get(`http://localhost:8000/opportunities/${companyID}/evaluation/${evalID}`, {withCredentials: true})
    },
    submitPayment(token, companyID, evalID) {
    	return axios.post(`http://localhost:8000/opportunities/${companyID}/evaluation/${evalID}`, {token}, {withCredentials: true})
    }
};

export default Auth;