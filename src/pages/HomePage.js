import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { AiFillLinkedin, AiFillGithub, AiOutlineSmile } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';
import swimPic from '../images/swimpic.jpg';
import lyricallyHome from '../images/lyricallyHome.png';
import lyricallySearch from '../images/lyricallySearch.png';

const HomePage = () => {
	const sectionRef = useRef(null);
	const intersection = useIntersection(sectionRef, {
		root       : null,
		rootMargin : '0px',
		threshold  : 0.5
	});

	const fadeIn = (e) => {
		gsap.to(e, 1, {
			opacity : 1,
			y       : -5,
			ease    : 'power4.out',
			stagger : {
				amount : 0.3
			}
		});
	};

	const fadeOut = (e) => {
		gsap.to(e, 1, {
			opacity : 0,
			y       : 40,
			ease    : 'power4.out'
		});
	};

	intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.fadeIn') : fadeIn('.fadeIn');

	return (
		<div className=" flex-grow-1 d-flex flex-column flex-sm-row overflow-auto">
			<div className="row justify-content-center flex-grow-sm-1 flex-grow-0">
				<div className="sidebar col-sm-5 flex-grow-0 sticky-top d-flex flex-column justify-content-center align-items-start vh-100">
					<div className="about-name mt-5 ms-5">
						<h1 className="mt-2 slide-in">Ryland Oehlers</h1>
					</div>

					<div className="about-header slide-in ms-5">
						<h3 className="mb-0">DEVELOPER.</h3>
						<h3 className="mb-0">MUSICIAN.</h3>
						<h3 className="mb-0">CREATIVE</h3>
						<h3 className="mb-0">& HUSBAND.</h3>
					</div>
					<div className="about-body ms-5 mt-3 w-75">
						<p className="pe-3 pt-2 slide-in-2">
							Currently finishing a Software Engineering Program with
							<a href="https://www.springboard.com" target="_blank" rel="noopener noreferrer">
								{' '}
								@Springboard
							</a>. Formerly a Professional Full-Time Touring Musician with{' '}
							<a href="https://www.citizentheband.net" target="_blank" rel="noopener noreferrer">
								@Citizen
							</a>. Check out my work and projects below.
						</p>
					</div>
					<div className="about-links slide-in-3 ms-5">
						<a
							href="https://www.linkedin.com/in/rylandoehlers"
							className="linkedin-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillLinkedin />
						</a>
						<a
							href="https://www.github.com/rylandinthesun"
							className="github-icon ps-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://www.instagram.com/rylandinthesun"
							className="instagram-icon ps-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TiSocialInstagram />
						</a>
						<a
							href="https://www.twitter.com/rylandinthesun"
							className="twitter-icon ps-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter />
						</a>
					</div>
					<div className="ms-5 mt-4 slide-in-2">
						<a className="email-btn" href="mailto:ryland.oehlers@gmail.com?subject=Website Inquiry">
							<button>Get In Touch!</button>
						</a>
					</div>
				</div>
				<div className="col-sm-7 overflow-auto vh-100 ps-0 pe-0">
					<div className="project-1 d-flex justify-content-center align-items-center">
						<div style={{ height: '400px', width: '75%' }} className="text-center shadow row">
							<img
								style={{ objectFit: 'cover', height: '100%', width: '100%' }}
								src={swimPic}
								className="img-fluid rounded-3 col px-0"
								alt="Ryland swimming"
							/>
						</div>
					</div>
					<div
						ref={sectionRef}
						className="project-2 d-flex flex-column justify-content-center align-items-center"
					>
						<div className="project-2-title fadeIn d-flex  align-self-start ps-5">
							<p>
								<a href="http://lyrically-by-ryland.herokuapp.com/">Lyrically </a>
								<a className="ps-1" href="https://github.com/rylandinthesun/Lyrically">
									<AiFillGithub />
								</a>
							</p>
						</div>
						<div style={{ height: '200px', width: '320px' }} className="fadeIn text-center shadow row mb-2">
							<img
								style={{ objectFit: 'cover', height: '100%', width: '100%' }}
								src={lyricallyHome}
								className="img-fluid rounded-1 col px-0"
								alt="Lyrically Homepage"
							/>
						</div>
						<div style={{ height: '200px', width: '320px' }} className="fadeIn text-center shadow row">
							<img
								style={{ objectFit: 'cover', height: '100%', width: '100%' }}
								src={lyricallySearch}
								className="img-fluid rounded-1 col px-0"
								alt="Lyrically Search Page."
							/>
						</div>
						<div className="project-2-footer fadeIn mt-4 w-75 text-center">
							<p>
								<b style={{ fontWeight: '700' }}>Tech Used:</b> Python, Flask, SQLAlchemy,
								BeautifulSoup, & Tailwind.
							</p>
						</div>
					</div>
					<div className="project-3 d-flex flex-column justify-content-center align-items-center">
						<h4>
							More Work Coming Soon <AiOutlineSmile />
						</h4>
					</div>
					<footer className="pt-4 pb-1">
						<p>&#169; 2021 Ryland Oehlers. Made in the USA.</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
