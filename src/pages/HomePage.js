import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';
import { FaTwitter } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import selfPortrait from '../images/selfportrait.jpg';
import Calculator from '../components/Calculator';
import './HomePage.scss';
import Lyrically from '../components/Lyrically';
import QuoteApp from '../components/QuoteApp';
import SynthApp from '../components/SynthApp';

const HomePage = () => {
	return (
		<div className="d-flex flex-column">
			<div className="row justify-content-center">
				<div className="sidebar col-sm-5 d-flex flex-column justify-content-center align-items-start vh-100">
					<div className="about-name mt-3 ms-5">
						<h1 className="mt-2 slide-in pe-2">Ryland Oehlers</h1>
					</div>

					<div className="about-header slide-in ms-5 mt-3">
						<h3 className="mb-0">DEVELOPER.</h3>
						<h3 className="mb-0">DESIGNER &</h3>
						<h3 className="mb-0">MUSICIAN.</h3>
					</div>
					<div className="about-body ms-5 mt-3 w-75">
						<p className="pe-3 pt-3 slide-in-2">
							Software Developer currently based in Ohio who previously worked in the music industry as a
							Professional Full-Time Touring Musician. Scroll to check out some of my projects or click
							the links below to get in touch.
						</p>
					</div>
					<div className="about-links slide-in-3 ms-5">
						<a
							href="mailto:ryland.oehlers@gmail.com?subject=Website Inquiry"
							className="email-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<HiOutlineMail />
						</a>
						<a
							href="https://www.linkedin.com/in/rylandoehlers"
							className="linkedin-icon ps-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillLinkedin />
						</a>
						<a
							href="https://www.github.com/rylandinthesun"
							className="github-icon ps-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://www.instagram.com/rylandinthesun"
							className="instagram-icon ps-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TiSocialInstagram />
						</a>
						<a
							href="https://www.twitter.com/rylandinthesun"
							className="twitter-icon ps-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter />
						</a>
					</div>
					<div className="arrow-down mt-4 pt-4 slide-in-2 w-100">
						<div className="text-center">
							<IoIosArrowDown />
						</div>
					</div>
				</div>
				<div className="col-sm-7 vh-100 ps-0 pe-0">
					<div className="photo-section d-flex justify-content-center align-items-center">
						<div style={{ height: '500px', width: '75%' }} className="text-center shadow row">
							<img
								style={{ objectFit: 'cover', height: '100%', width: '100%' }}
								src={selfPortrait}
								className="img-fluid rounded-3 col px-0"
								alt="Ryland self"
							/>
						</div>
					</div>
					<div className="project-lyrically">
						<Lyrically />
					</div>
					<div className="project-calculator">
						<Calculator />
					</div>
					<div className="project-quote">
						<QuoteApp />
					</div>
					<div className="project-synth">
						<SynthApp />
					</div>
					<footer className="pt-3">
						<p>&#169; 2021 Ryland Oehlers. Made in the USA.</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
