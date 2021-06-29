import lyricallyHome from '../images/lyricallyMacbookMock.png';
import { AiFillGithub } from 'react-icons/ai';

const Lyrically = () => {
	return (
		<div className="project-lyrically d-flex flex-column justify-content-center align-items-center">
			<div className="project-title d-flex align-self-start ps-5">
				<p>
					<a href="http://lyrically-by-ryland.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						Lyrically{' '}
					</a>
					<a
						className="ps-1"
						href="https://github.com/rylandinthesun/Lyrically"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillGithub />
					</a>
				</p>
			</div>
			<div className="macbook-photo text-center row mb-2">
				<img
					style={{ objectFit: 'cover', height: '320px', width: '300px' }}
					src={lyricallyHome}
					className=" lyrically-photo img-fluid rounded-1 col px-0 mt-5"
					alt="Lyrically Homepage"
				/>
			</div>

			<div className="project-footer mt-4 w-75 text-center">
				<p>
					<span className="footer-bold">Tech Used:</span> Python, Flask, SQLAlchemy, BeautifulSoup, Tailwind &
					Genius Lyrics API.
				</p>
			</div>
		</div>
	);
};

export default Lyrically;
