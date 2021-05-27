import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect } from 'react';

import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';
import Logs from './components/logs/Logs';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import TechListModal from './components/techs/TechListModal';

const App = () => {
	// Initialize Materialize JavaScript
	useEffect(() => {
		M.AuthInit();
	});

	return (
		<>
			<SearchBar />
			<div className='container'>
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<Logs />
			</div>
		</>
	);
};

export default App;
