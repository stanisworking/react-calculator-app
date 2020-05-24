import React from 'react';

const keypadRow = (props) => {
	return (
		<div className='valign-wrapper' style={{ height: '11vh' }}>
			{props.children}
		</div>
	);
};
export default keypadRow;
