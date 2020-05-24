import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';

const keypad = () => {
	return (
		<section className='keypad'>
			<KeypadRow>
				<Button>C</Button>
				<Button>&larr;</Button>
				<Button>%</Button>
				<Button>/</Button>
			</KeypadRow>
			<KeypadRow>
				<Button>9</Button>
				<Button>8</Button>
				<Button>7</Button>
				<Button>
					<i class='large material-icons'>close</i>
				</Button>
			</KeypadRow>
			<KeypadRow>
				<Button>6</Button>
				<Button>5</Button>
				<Button>4</Button>
				<Button>
					<i class='material-icons'>remove</i>
				</Button>
			</KeypadRow>
			<KeypadRow>
				<Button>3</Button>
				<Button>2</Button>
				<Button>1</Button>
				<Button>
					<i class='material-icons'>add</i>
				</Button>
			</KeypadRow>
			<KeypadRow>
				<Button>0</Button>
				<Button>.</Button>
				<LargeButton>=</LargeButton>
			</KeypadRow>
		</section>
	);
};
export default keypad;
