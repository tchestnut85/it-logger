import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect } from 'react';

import Logs from './components/logs/Logs';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';

const App = () => {
	// Initialize Materialize JavaScript
	useEffect(() => {
		M.AuthInit();
	});

	return (
		<>
			<SearchBar />
			<div className='container'>
				<Logs />
			</div>
		</>
	);
};

export default App;
