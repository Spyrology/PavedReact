//action types
export const SET_DETAILS = 'SET_DETAILS'
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'

//action creators

export function setDetails(showDetails) {
	return {
		type: 'SET_DETAILS',
		showDetails
	}
}

export function toggleDetails(index) {
	return {
		type: 'TOGGLE_DETAILS',
		index
	};
}