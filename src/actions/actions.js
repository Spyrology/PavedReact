//action types
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'

//action creators

export function toggleDetails(id) {
	return {
		type: 'TOGGLE_DETAILS',
		oppId: id
	};
}