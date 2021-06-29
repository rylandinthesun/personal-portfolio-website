import quoteMock from '../images/quoteAppMock.png';
import { AiFillGithub } from 'react-icons/ai';

const QuoteApp = () => {
	return (
		<div className="project-quote d-flex flex-column justify-content-center align-items-center">
			<div className="project-title d-flex align-self-start ps-5">
				<p>
					<a href="https://react-quotes-rylandinthesun.vercel.app" target="_blank" rel="noopener noreferrer">
						Random Quote{' '}
					</a>
					<a
						className="ps-1"
						href="https://github.com/rylandinthesun/react-quote"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillGithub />
					</a>
				</p>
			</div>
			<div className="iphone-photo text-center row mb-2">
				<img
					style={{ objectFit: 'cover', height: '100%', width: '100%' }}
					src={quoteMock}
					className="quote-photo img-fluid rounded-1 col px-0"
					alt="Calculator App"
				/>
			</div>

			<div className="project-footer mt-4 w-75 text-center">
				<p>
					<span className="footer-bold">Tech Used:</span> React, JavaScript, HTML/CSS & Quotable API.
				</p>
			</div>
		</div>
	);
};

export default QuoteApp;
