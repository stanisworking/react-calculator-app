import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputeScreen/ComputeScreen';

const screen = (props) => {
	return (
		<section
			className='right-align red lighten-4'
			style={{ height: '25vh', padding: '10px' }}
		>
			<ResultScreen>{props.result}</ResultScreen>
			<ComputationScreen>{props.equation}</ComputationScreen>
		</section>
	);
};

export default screen;
