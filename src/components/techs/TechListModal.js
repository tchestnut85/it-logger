import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../utils/actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <h4>Loading...</h4>;
	}

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-co'>
				<h4>Technician List</h4>
				<ul className='collection'>
					{!loading &&
						techs !== null &&
						techs.map(tech => (
							<TechItem tech={tech} key={tech.id} />
						))}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	tech: PropTypes.object.isRequired,
	getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
