import React, { useEffect, useRef, useState } from 'react'
import { experiences } from './ExperienceList'
import './Experience.scss'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions/index'
import MotionDiv from '../UI/Animation/MotionDiv/MotionDiv'
import useElementOnScreen from '../../hooks/useElementOnScreen'

const Experience = () => {
	const workWrapperRef = useRef();
	const [activeIndex, setActiveIndex] = useState(-1)
	const dispatch = useDispatch();
	const [cursorActive, setCursorActive] = useState(false);
	const [currMouseEntered, setCurrMouseEntered] = useState(0);
	const [enteredExperience, setEnteredExperience] = useState(false);
	const elementScrollPos = useElementOnScreen(workWrapperRef, -200)

	useEffect(() => {
		if (elementScrollPos.visible && !enteredExperience) {
			setEnteredExperience(true)
		}
	}, [elementScrollPos])

	useEffect(() => {
		window.addEventListener('resize', updateAccordianHeight);
		window.addEventListener('mousemove', handleWindowMouseMove);

		return () => {
			window.removeEventListener('resize', updateAccordianHeight);
			window.removeEventListener('mousemove', handleWindowMouseMove);
		}
	}, [])

	const handleWindowMouseMove = (e) => {
		const cursors = document.querySelectorAll('.work_cursor');
		if (cursors) {

			cursors.forEach(cursor => {
				cursor.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
			})
		}
	}

	useEffect(() => {
		updateAccordianHeight();
	}, [activeIndex])

	const updateAccordianHeight = () => {
		const contents = document.querySelectorAll('.content');

		contents.forEach((content, index) => {
			if (activeIndex === index) {
				content.style.maxHeight = `${content.scrollHeight}px`;
			} else {
				content.style.maxHeight = 0;
			}
		})
	}

	return (
		<div className='Experience container'>
			<div className="title_wrapper">
				<MotionDiv from={{ transform: `translateY(100%)` }} to={{ transform: `translateY(0)` }} duration={600} scrollDiv={true} offsetTop={100} offsetBottom={0} reverse={false}>
					<h2>Work Experience</h2>
				</MotionDiv>
			</div>

			<div className={`work_wrapper ${enteredExperience ? 'active' : ''}`}
				onMouseLeave={() => {
					setCursorActive(false)
					dispatch(actions.setCursorType("default"));
				}} onMouseEnter={() => {
					dispatch(actions.setCursorType("none"));
					setCursorActive(true)
				}}
				ref={workWrapperRef}
			>
				{
					experiences.map((experience, index) => {
						return (
							<div key={index} className='work'
								onClick={() => { activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index) }}
								onMouseEnter={() => { setCurrMouseEntered(index) }}
							>
								<div className={`work_cursor ${cursorActive && currMouseEntered === index && activeIndex !== index ? 'active' : ''}`}>
									<img className={`${cursorActive && currMouseEntered === index && activeIndex !== index ? 'active' : ''}`} src={experience.images[0]} alt="" style={{ padding: `${experience.padding ? experience.padding : 0}` }} />
									<div className="view" >
										View
									</div>
								</div>
								<div className={`header ${cursorActive && currMouseEntered === index && activeIndex !== index ? 'active' : ''}`}>
									<div className="company_wrapper">
										<div className={`company ${enteredExperience ? 'active' : ''}`}>{experience.company}</div>
									</div>
									<div className="role_wrapper">
										<div className={`role ${enteredExperience ? 'active' : ''}`}>{experience.role}</div>
									</div>
								</div>
								<div className='content_wrapper'>
									<div className='content'>
										<div className="role_info">
											<div className="type">{experience.type}</div>
											<div className="dot"></div>
											<div className="date">{experience.startDate} - {experience.endDate}</div>
										</div>

										{
											experience.workList.map((work, index) => {
												return (
													<div key={index} className="content_item">
														<div className='indicator'></div>
														<div className="point">{work}</div>
													</div>
												)
											})
										}
									</div>
								</div>


							</div>
						)
					})
				}
			</div>

		</div>
	)
}

export default Experience