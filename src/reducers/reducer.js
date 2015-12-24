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
		return {
			...state,
			opps: action.data
		};
  case 'TOGGLE_DETAILS':
  	return {
  		...state,
    	showDetails: toggleShowDetails(state.showDetails, action.oppId)
  	};
  }
  return state;
}

const toggleShowDetails = (array, id) => {
	const index = array.indexOf(id);
	if (index > -1) {
		return [
		...array.slice(0, index),
		...array.slice(index + 1)
		];
	}	else {
		return [...array, id];
	}
}