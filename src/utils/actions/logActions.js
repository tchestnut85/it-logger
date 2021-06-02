import {
	ADD_LOG,
	CLEAR_CURRENT,
	DELETE_LOG,
	GET_LOGS,
	LOGS_ERROR,
	SEARCH_LOGS,
	SET_CURRENT,
	SET_LOADING,
	UPDATE_LOG,
} from './types';

// USING REDUX THUNK TO fetch data async

// Add a new Log
export const addLog = log => async dispatch => {
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

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

// Delete a log
export const deleteLog = id => async dispatch => {
	try {
		setLoading();

		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Update a log
export const updateLog = log => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Search server logs
export const searchLogs = text => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Set the current log to update (not interacting with the backend/db)
export const setCurrent = log => {
	return {
		type: SET_CURRENT,
		paylod: log,
	};
};

// Clear the current log to update (not interacting with the backend/db)
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
