// import React, { useRef, useEffect } from 'react'
// import useWindowDimensions from '../../../hooks/windowResizeHook';

// const SmoothScrollContainer = ({ children, skewIntensity, className, style }) => {
// 	const size = useWindowDimensions();
// 	const scrollContainer = useRef();

// 	// Configs
// 	const data = {
// 		ease: 0.1,
// 		current: 0,
// 		previous: 0,
// 		rounded: 0
// 	};

// 	// Run scrollrender once page is loaded.
// 	useEffect(() => {
// 		requestAnimationFrame(() => skewScrolling());
// 		return () => {
// 			cancelAnimationFrame(() => skewScrolling());
// 		};
// 	}, []);

// 	//set the height of the body.
// 	useEffect(() => {
// 		setBodyHeight();
// 	}, [size.windowHeight]);

// 	//Set the height of the body to the height of the scrolling div
// 	const setBodyHeight = () => {
// 		document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
// 	};

// 	// Scrolling
// 	const skewScrolling = () => {
// 		//Set Current to the scroll position amount
// 		data.current = window.scrollY;
// 		// Set Previous to the scroll previous position
// 		data.previous += (data.current - data.previous) * data.ease;
// 		// Set rounded to
// 		data.rounded = Math.round(data.previous * 100) / 100;

// 		// Difference between
// 		const difference = data.current - data.rounded;
// 		const acceleration = difference / size.windowWidth;
// 		const velocity = +acceleration;
// 		const skew = velocity * skewIntensity;

// 		// //Assign skew and smooth scrolling to the scroll container
// 		if (skewIntensity)
// 			scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
// 		else
// 			scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

// 		//loop vai raf
// 		requestAnimationFrame(() => skewScrolling());
// 	};

// 	return (
// 		<div ref={scrollContainer} className={className} style={style}>
// 			{children}
// 		</div>
// 	);
// }

// export default SmoothScrollContainer