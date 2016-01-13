import axios from 'axios';

var oppsSource = {
    getOpps(){
      return axios.get('http://localhost:8000/opportunities', {withCredentials: true});
    },
};

export default oppsSource;