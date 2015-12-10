import {Map} from 'immutable';
import { TOGGLE_DETAILS, SET_DETAILS } from '../actions/actions'

function setState(state, newState) {
	console.log(newState);
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(
    	state, action.state
    );

  case 'SET_DETAILS':
  	return Object.assign([], state, {
  		showDetails: [
  		...state.showDetails(action.showDetails),
  		Object.assign([], state.showDetails[action.showDetails])
  		]
  		//we need to access the showDetails part of the state tree,
  		//and give it the showDetails paylod 
  	})

  case 'TOGGLE_DETAILS':
  	return Object.assign({}, state, {
  		showDetails: [
  			...state.showDetails.slice(action.index),
  			Object.assign({}, state.showDetails[action.index], {
  				index: true
  			})
  		]
  	})

  default: 
  	return state;
}
}