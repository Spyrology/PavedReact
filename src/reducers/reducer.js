import {Map} from 'immutable';

function setState(state, newState) {
	console.log(state);
	console.log(newState);
  return newState;
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'SET_STATE':
  	console.log("foo");
    return setState(state, action.state);
  }
  return state;
}