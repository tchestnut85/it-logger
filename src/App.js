import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect } from 'react';

import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logComponents/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logComponents/EditLogModal';
import Logs from './components/logComponents/Logs';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import SearchBar from './components/layout/SearchBar';
import TechListModal from './components/techs/TechListModal';
import store from './utils/store';

const App = () => {
	// Initialize Materialize JavaScript
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<Provider store={store}>
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
		</Provider>
	);
};

export default App;
