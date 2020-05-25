import React, { Component } from 'react';
import { evaluate } from 'mathjs';

import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

const BTN_CLEAR = 'C';
const BTN_OPERATOR = ['+', '-', 'x', '/', '%'];
const BTN_EQUAL = '=';

class calculator extends Component {
	state = {
		equation: '',
		result: 0,
	};

	onButtonPress = (event) => {
		let equation = this.state.equation;
		let pressedButton = event.target.innerHTML;

		console.log('pressedButton > ', pressedButton);

		if (pressedButton.toUpperCase() === BTN_CLEAR.toUpperCase()) {
			return this.clear();
		} else if (
			(pressedButton >= '0' && pressedButton <= '9') ||
			pressedButton === '.'
		) {
			equation += pressedButton;
		} else if (BTN_OPERATOR.indexOf(pressedButton) !== -1) {
			equation += ' ' + pressedButton + ' ';
		} else if (pressedButton === BTN_EQUAL) {
			try {
				const finalEquation = equation.replace(/x/g, '*'); // Replace 'x' with actual '*' so that it can be evaluated
				const evalResult = evaluate(finalEquation);
				const result = Number.isInteger(evalResult)
					? evalResult
					: evalResult.toFixed(2);
				this.setState({ result });
			} catch (error) {
				alert('Invalid Mathematical Equation');
			}
		} else {
			equation = equation.trim();
			equation = equation.substr(0, equation.length - 1);
		}

		this.setState({ equation: equation });
	};

	clear() {
		this.setState({
			equation: '',
			result: 0,
		});
	}

	render() {
		return (
			<div className='row'>
				<div className='col s6 offset-s3' style={{ height: '100vh' }}>
					<div className='card' style={{ height: '80vh' }}>
						<div className='card-content' style={{ padding: '0' }}>
							<Screen
								equation={this.state.equation}
								result={this.state.result}
							/>
							<Keypad onButtonPress={this.onButtonPress} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default calculator;
