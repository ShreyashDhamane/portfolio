import React, { useEffect } from 'react'
import './Codepen.scss';
import MotionDiv from '../../components/UI/Animation/MotionDiv/MotionDiv';

const Codepen = () => {
	let offset = 200;
	const [scrollPos, setScrollPos] = React.useState(0);

	useEffect(() => {
		console.log(scrollPos);
	}, [scrollPos]);

	return (
		<div className='Codepen_container container padding_top_nav'>
			<MotionDiv
				from={{ opacity: 0, transform: 'translateY(100px)' }}
				to={{ opacity: 1, transform: 'translateY(0)' }}
				offset={offset}
				className='section'
			/>
			<MotionDiv
				from={{ opacity: 0, transform: 'translateY(100px)' }}
				to={{ opacity: 1, transform: 'translateY(0)' }}
				offset={offset}
				scrollDiv={true}
				className='section'
			/>
			<MotionDiv
				from={{ opacity: 0, transform: 'translateY(100px)' }}
				to={{ opacity: 1, transform: 'translateY(0)' }}
				offsetTop={offset}
				offsetBottom={offset}
				setScrollPos={setScrollPos}
				scrollDiv={true}
				className='section'
				i={1}
			/>
			<MotionDiv
				from={{ opacity: 0, transform: 'translateY(100px)' }}
				to={{ opacity: 1, transform: 'translateY(0)' }}
				offset={offset}
				scrollDiv={true}
				className='section'
			/>
			<MotionDiv
				from={{ opacity: 0, transform: 'translateY(100px)' }}
				to={{ opacity: 1, transform: 'translateY(0)' }}
				offset={offset}
				scrollDiv={true}
				className='section'
			/>
			<MotionDiv
				from={{ opacity: 0, transform: 'translateY(100px)' }}
				to={{ opacity: 1, transform: 'translateY(0)' }}
				offset={offset}
				scrollDiv={true}
				className='section'
			/>
		</div>
	)
}

export default Codepen