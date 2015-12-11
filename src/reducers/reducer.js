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

  default: 
  	return state;
	}
}

export function oppDetails(state = [], action) {
  switch (action.type) {
  case 'SET_DETAILS':
  	return [
  		state, action.showDetails
  	] 
  case 'TOGGLE_DETAILS':
  	return [
  		state, action.toggleDetails(index)
  	]
  default:
  	return state
  }
}

 