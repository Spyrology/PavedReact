import axios from 'axios';

var oppsSource = {
    getOpps(){
      return axios.get('http://localhost:8000/opportunities', {withCredentials: true});
    },
    uploadEval(file, companyID, evalID) {
    	var data = new FormData();
      data.append('file', file);
    	return axios.post(`http://localhost:8000/opportunities/${companyID}/upload/${evalID}`, data, {withCredentials: true});
    }
};

export default oppsSource;