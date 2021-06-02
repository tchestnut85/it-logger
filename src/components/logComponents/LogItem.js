import { deleteLog, setCurrent } from '../../utils/actions/logActions';

import Moment from 'react-moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const LogItem = ({ log, deleteLog, setCurrent }) => {
	const onDelete = () => {
		deleteLog(log.id);
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					// eslint-disable-next-line
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention ? 'red-text' : 'blue-text'
					}`}
					onClick={() => setCurrent(log)}
				>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span>
					last updated by{' '}
					<span className='black-text'>{log.tech}</span> on{' '}
					<Moment format='MMMM Do YYYY, h:mm a'>{log.date}</Moment>
				</span>
				<a href='#!' className='secondary-content' onClick={onDelete}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
