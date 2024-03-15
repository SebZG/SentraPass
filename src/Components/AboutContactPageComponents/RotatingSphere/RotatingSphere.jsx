import { useState, useEffect } from 'react';

import TagCloud from 'TagCloud';

import AboutContact from '../../../pages/AboutContact/';

import './RotatingSphere.css';

const RotatingSphere = (props) => {
	// const [hideSkills, setHideSkills] = useState(false);
<<<<<<< HEAD
=======
	// const [hideSkills, setHideSkills] = useState(false);
>>>>>>> 1f3328f (fix login/signup form // Organization // CSS Overhaul)

	const handleClick = () => {
		props.setDisplayedCreatorId(null);
	}

	// if (hideSkills) {
	//   return <AboutContact />
	// }

	// if (hideSkills) {
	//   return <AboutContact />
	// }

<<<<<<< HEAD
=======
	// if (hideSkills) {
	//   return <AboutContact />
	// }

>>>>>>> 1f3328f (fix login/signup form // Organization // CSS Overhaul)
	useEffect(() => {
		return () => {
			const container = ".tagcloud";
			const texts = props.skills;

			const options = {
				radius: 150,
				maxSpeed: "normal",
				initSpeed: "normal",
				keep: true,
			};

			TagCloud(container, texts, options);
		};
	}, []);

	return (
		<div id='rotating-sphere'>
			<h3 class="hide-skills" onClick={handleClick}>HIDE SKILLS</h3>
			<div className="text-sphere">
				<span className="tagcloud"></span>
			</div>


		</div>
	);
};

export default RotatingSphere;
