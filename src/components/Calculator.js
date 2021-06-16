import React from 'react';
import calculatorMock from '../images/calculatorIphoneMock.png';
import { AiFillGithub } from 'react-icons/ai';
import './Calculator.scss';

const Calculator = () => {
	return (
		<div className="project-3 d-flex flex-column justify-content-center align-items-center">
			<div className="project-3-title d-flex align-self-start ps-5">
				<p>
					<a
						href="https://rylandinthesun.github.io/react-calculator/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Calculator{' '}
					</a>
					<a
						className="ps-1"
						href="https://github.com/rylandinthesun/react-calculator"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillGithub />
					</a>
				</p>
			</div>
			<div style={{ height: '400px', width: '200px' }} className="text-center row mb-2">
				<img
					style={{ objectFit: 'cover', height: '100%', width: '100%' }}
					src={calculatorMock}
					className="img-fluid rounded-1 col px-0"
					alt="Calculator App"
				/>
			</div>

			<div className="project-3-footer mt-4 w-75 text-center">
				<p>
					<b style={{ fontWeight: '700' }}>Tech Used:</b> React, JavaScript, HTML & SCSS.
				</p>
			</div>
		</div>
	);
};

export default Calculator;
