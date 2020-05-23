import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputeScreen/ComputeScreen';

const screen = () => {
	return (
		<section className='right-align red lighten-4' style={{ padding: '10px' }}>
			<ResultScreen />
			<ComputationScreen />
		</section>
	);
};

export default screen;
