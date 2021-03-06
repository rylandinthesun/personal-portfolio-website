import calculatorMock from '../images/calculatorIphoneMock.png';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

const Calculator = () => {
	return (
		<div className="project-calculator d-flex flex-column justify-content-center align-items-center">
			<div className="project-title d-flex align-self-start ps-5">
				<p>
					<a
						href="https://rylandinthesun.github.io/react-calculator/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Calculator <BsArrowRightShort className="right-arrow" />
					</a>
				</p>
			</div>
			<div className="iphone-photo text-center row mb-2">
				<img
					style={{ objectFit: 'cover', height: '100%', width: '100%' }}
					src={calculatorMock}
					className="img-fluid rounded-1 col px-0"
					loading="lazy"
					alt="Calculator App"
				/>
			</div>

			<div className="project-footer mt-4 w-75 text-center">
				<p>
					<span className="footer-bold">Tech Used:</span> React, JavaScript, HTML & SCSS.{' '}
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
		</div>
	);
};

export default Calculator;
