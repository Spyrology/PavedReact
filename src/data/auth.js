import axios from 'axios';

var Auth = {
    getCreds(){
      return axios.get('http://localhost:8000/creds');
    },
    authUser(email, password) {
    	return axios.post('http://localhost:8000/auth', {email, password})
    }
};

export default Auth;