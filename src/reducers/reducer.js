import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { TOGGLE_DETAILS, SET_DETAILS } from '../actions/actions';

/*function setState(state, newState) {
	console.log(newState);
  return state.merge(newState);
}*/

export default function(state = [], action) {
  switch (action.type) {
  case 'SET_STATE':
    return (
    	state, action.state
    );
  }
  return state;
}

/*const oppDetails = (state = [], action) => {
  switch (action.type) {
  case 'SET_DETAILS':
  	return
  	console.log("made it 4");
  		state.update ({
  			index: action.index,
  			showDetails: false
  		});
  case 'TOGGLE_DETAILS':
  	return
  		console.log("made it 2"); 
	  	state.map(showDetails =>
	  		showDetails.index === action.index ?   
	  		Object.assign({}, state, {showDetails: !opp.showDetails}) :
	  		state
	  		);
  default:
  	return state
  }
}

 const pavedApp = combineReducers({
 	setOrgs,
 	oppDetails
 });*/

/* export default pavedApp*/