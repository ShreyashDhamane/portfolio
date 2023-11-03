import React, { useRef, useState, useEffect } from 'react'
import useElementOnScreen from '../../../../hooks/useElementOnScreen';

/* 
	Usage:
	offsetTop - specify by how much element should be above the viewport to trigger animation
	offsetBottom - specify by how much element should be below the viewport to trigger animation
	offset - specify by how much element should be above or below the viewport to trigger animation
	from - specify styles for element from where animation should start
	to - specify styles for element where animation should end and the final position of the element

	Types of animation:
	oneTimeAnimate - if true, animation will be triggered only once, when element is visible in the viewport
	reverse - if true, animation will be triggered when element is above the viewport, as well as below the viewport and also when element is visible in the viewport
	default - animation will be triggered when element is visible in the viewport and also when element is below the viewport
*/

const MotionDiv = ({ children, from, to, className, style, offset = 0, offsetTop = 0, offsetBottom = 0, reverse = false, oneTimeAnimate = false, scrollDiv = false, setScrollPos, duration = 600, delay, pageDelay = false, onMouseEnter, onMouseLeave, onClick }) => {
	const ref = useRef(null);
	const elemScrollPos = scrollDiv ? useElementOnScreen(ref, -offset, -offsetTop, -offsetBottom, setScrollPos) : { visible: true, above: false, below: false };
	const defaultStyles = {
		transition: `${duration}ms ease`,
	};
	let Delay = 0;

	if (pageDelay) {
		Delay = delay ? delay + 1900 : 1900;
	} else {
		Delay = delay ? delay : 0;
	}


	const fromStyles = {
		style: {
			...defaultStyles,
			...from,
		},
		type: "from"
	}
	const toStyles = {
		style: {
			...defaultStyles,
			...to,
		},
		type: "to"
	}
	const [stylesContent, setStylesContent] = useState(fromStyles);

	useEffect(() => {
		if (scrollDiv) {
			if (elemScrollPos.above) {
				if (reverse) {
					setTimeout(() => {
						setStylesContent(fromStyles);
					}, Delay)
				} else {
					setTimeout(() => {
						setStylesContent(toStyles);
					}, Delay)
				}
			} else if (elemScrollPos.below) {
				if (!oneTimeAnimate) {
					setTimeout(() => {
						setStylesContent(fromStyles);
					}, Delay)
				}
			} else if (elemScrollPos.visible) {
				setTimeout(() => {
					setStylesContent(toStyles);
				}, Delay)
			}
		}
	}, [elemScrollPos]);

	useEffect(() => {
		if (!scrollDiv) {
			setTimeout(() => {
				setStylesContent(toStyles);
			}, Delay)
		}
	}, []);

	return (
		<div
			ref={ref}
			style={{ ...style, ...stylesContent.style }}
			className={className}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

export default MotionDiv