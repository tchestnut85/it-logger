import Moment from 'react-moment';
import PropTypes from 'prop-types';
import React from 'react';

const LogItem = ({ log }) => {
	return (
		<li className='collection-item'>
			<div>
				<a
					// eslint-disable-next-line
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention ? 'red-text' : 'blue-text'
					}`}
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
				<a href='#!' className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
};

export default LogItem;
