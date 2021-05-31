import { ADD_LOG, GET_LOGS, LOGS_ERROR, SET_LOADING } from './types';

// USING REDUX THUNK TO fetch data async

// Add a new Log
export const addLog = log => async dispatch => {
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await res.json();
		console.log('data:', data);

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Get logs from the server
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
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
