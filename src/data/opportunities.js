import axios from 'axios';

var oppsSource = {
    getOpps(){
      return axios.get('http://localhost:8000/opportunities');
    },
    /*getOpps(id){
      return axios.get(`http://localhost:8000/opportunities/${id}`);
    }*/
};

export default oppsSource;