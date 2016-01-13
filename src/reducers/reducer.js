import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { TOGGLE_DETAILS, USER_AUTH, CLOSE_ALL_DETAILS, HAS_PURCHASED, EVAL_DETAILS } from '../actions/actions';

const initialState = {
	opps: [],
	showDetails: [],
	isAuth: undefined,
	hasPurchased: {},
	evalDetails: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
  case 'LOAD_OPPS':
		return {
			...state,
			opps: action.data
		};
  case TOGGLE_DETAILS:
  	return {
  		...state,
    	showDetails: toggleShowDetails(state.showDetails, action.oppId)
  	};
  case USER_AUTH:
  	return {
  		...state,
  		isAuth: action.isAuth
  	};
  case CLOSE_ALL_DETAILS:
	  return {
	    ...state,
	    showDetails: []
	  };
	case HAS_PURCHASED:
	  return {
	    ...state,
	    hasPurchased: {
	    	...state.hasPurchased,
	    	[action.evalID]: action.hasPurchased
	    }
	  };
	case EVAL_DETAILS:
	  return {
	    ...state,
	    evalDetails: {
	    	...state.hasPurchased,
	    	[action.evalID]: action.evalDetails
	    }
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