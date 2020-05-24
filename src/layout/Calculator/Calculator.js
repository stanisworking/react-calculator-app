import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

const calculator = () => {
	return (
		<div className='row'>
			<div className='col s6 offset-s3' style={{ height: '100vh' }}>
				<div className='card' style={{ height: '80vh' }}>
					<div class='card-content' style={{ padding: '0' }}>
						<Screen />
						<Keypad />
					</div>
				</div>
			</div>
		</div>
	);
};

export default calculator;
