import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
	// Initialize Materialize JavaScript
	useEffect(() => {
		M.AuthInit();
	});
	return <div className='App'>It Logger</div>;
};

export default App;
