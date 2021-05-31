import { GET_LOGS, LOGS_ERROR, SET_LOADING } from './types';

// USING REDUX THUNK TO CALL THESE ASYNCHRONOUSLY

// export const getLogs = () => {
// 	return async dispatch => {
// 		setLoading();

// 		const res = await fetch('/logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data,
// 		});
// 	};
// };

export const getLogs = () => async dispatch => {
	try {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
