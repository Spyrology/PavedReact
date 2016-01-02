import axios from 'axios';

var Auth = {
    getCreds(){
      return axios.get('http://localhost:8000/creds');
    },
};

export default Auth;