import synthPic from '../images/synthAppMock.png';
import { AiFillGithub } from 'react-icons/ai';

const SynthApp = () => {
	return (
		<div className="project-synth d-flex flex-column justify-content-center align-items-center">
			<div className="project-title d-flex align-self-start ps-5">
				<p>
					<a href="https://nextjs-dream-synth.vercel.app/" target="_blank" rel="noopener noreferrer">
						Dream Synth{' '}
					</a>
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
			<div style={{ height: '400px', width: '80%' }} className="text-center row mb-2">
				<img
					style={{ objectFit: 'cover', height: '320px', width: '300px' }}
					src={synthPic}
					className="img-fluid rounded-1 col px-0 mt-5"
					alt="Dream Synth Mock"
				/>
			</div>

			<div className="project-footer mt-4 w-75 text-center">
				<p>
					<b style={{ fontWeight: '700' }}>Tech Used:</b> Next.js, Tone.js, HTML/CSS & Vercel.
				</p>
			</div>
		</div>
	);
};

export default SynthApp;
