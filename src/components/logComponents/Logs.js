import React, { useEffect, useState } from 'react';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	const getLogs = async () => {
		setLoading(true);

		const res = await fetch('/logs');
		const data = await res.json();

		setLogs(data);
		setLoading(false);
	};

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs.</p>
			) : (
				logs.map(log => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

export default Logs;
