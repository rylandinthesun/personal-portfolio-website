import synthPic from '../images/synthAppMock.png';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

const SynthApp = () => {
	return (
		<div className="project-synth d-flex flex-column justify-content-center align-items-center">
			<div className="project-title d-flex align-self-start ps-5">
				<p>
					<a href="https://nextjs-dream-synth.vercel.app/" target="_blank" rel="noopener noreferrer">
						Dream Synth <BsArrowRightShort className="right-arrow" />
					</a>
				</p>
			</div>
			<div className="macbook-photo text-center row mb-2">
				<img
					style={{ objectFit: 'cover', height: '320px', width: '300px' }}
					src={synthPic}
					className="synth-photo img-fluid rounded-1 col px-0 mt-5"
					loading="lazy"
					alt="Dream Synth Mock"
				/>
			</div>

			<div className="project-footer mt-4 w-75 text-center">
				<p>
					<span className="footer-bold">Tech Used:</span> Next.js, Tone.js, HTML/CSS & Vercel.{' '}
					<a
						className="ps-1"
						href="https://github.com/rylandinthesun/nextjs-dream-synth"
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

export default SynthApp;
