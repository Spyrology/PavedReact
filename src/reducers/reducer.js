import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { TOGGLE_DETAILS } from '../actions/actions';

const initialState = {
	opps: [],
	showDetails: []
}

export default function(state = initialState, action) {
  switch (action.type) {
  case 'LOAD_OPPS':
    return Object.assign({}, state, {
    	opps: action.data
    })
  case 'TOGGLE_DETAILS':
  	return Object.assign({}, state, {
    	showDetails: toggleShowDetails(state.showDetails, action.oppId)
    })
  }
  return state;
}

const toggleShowDetails = (array, id) => {
	var copy = array.slice();
	var index = copy.indexOf(id)
	if (index > -1) {
		copy.splice(index, 1)
	}
	else {
		copy.push(id)
	}
	return copy;
}  
