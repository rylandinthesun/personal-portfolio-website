import React from 'react';

import lyricallyHome from '../images/lyricallyHome.png';
import lyricallySearch from '../images/lyricallySearch.png';
import { AiFillGithub } from 'react-icons/ai';

const Lyrically = () => {
	return (
		<div className="project-2 d-flex flex-column justify-content-center align-items-center">
			<div className="project-2-title d-flex align-self-start ps-5">
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
			<div style={{ height: '200px', width: '320px' }} className="text-center shadow row mb-2">
				<img
					style={{ objectFit: 'cover', height: '100%', width: '100%' }}
					src={lyricallyHome}
					className="img-fluid rounded-1 col px-0"
					alt="Lyrically Homepage"
				/>
			</div>
			<div style={{ height: '200px', width: '320px' }} className="text-center shadow row">
				<img
					style={{ objectFit: 'cover', height: '100%', width: '100%' }}
					src={lyricallySearch}
					className="img-fluid rounded-1 col px-0"
					alt="Lyrically Search Page."
				/>
			</div>
			<div className="project-2-footer mt-4 w-75 text-center">
				<p>
					<b style={{ fontWeight: '700' }}>Tech Used:</b> Python, Flask, SQLAlchemy, BeautifulSoup, &
					Tailwind.
				</p>
			</div>
		</div>
	);
};

export default Lyrically;
