import React from 'react';
const button = (props) => {
	if (typeof props !== 'undefined' && typeof props.type !== 'undefined') {
		if (props.type === 'large') {
			return (
				<div
					className='waves-effect btn-flat btn-large'
					style={{
						width: '50%',
						height: '100%',
						margin: '0',
						padding: '0',
					}}
					onClick={props.onButtonPress}
				>
					<h4>{props.children}</h4>
				</div>
			);
		}
	}

	return (
		<div
			className='waves-effect btn-flat btn-large'
			style={{ width: '25%', height: '100%', margin: '0', padding: '0' }}
			onClick={props.onButtonPress}
		>
			<h4>{props.children}</h4>
		</div>
	);
};
export default button;
