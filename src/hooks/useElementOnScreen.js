import { useState, useEffect } from "react";

export default function useElementOnScreen(ref, offset = 0, offsetTop = null, offsetBottom = null, setSrollPos = null) {
	const [elemScrollPos, setElemScrollPos] = useState({
		below: false,
		above: false,
		visible: false,
	});

	useEffect(() => {
		if (setSrollPos) {
			window.addEventListener("scroll", updateScrollPos);
		}
		const observer = new window.IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setElemScrollPos({
					below: false,
					above: false,
					visible: true,
				});
				return
			}
			if (entry.boundingClientRect.top > 0) {
				setElemScrollPos({
					below: true,
					above: false,
					visible: false,
				});
			} else {
				setElemScrollPos({
					below: false,
					above: true,
					visible: false,
				});
			}
		}, {
			rootMargin: `${offsetTop || offset || offsetBottom || 0}px 0px ${offsetBottom || offset || offsetTop || 0}px 0px`,
		})
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
			if (setSrollPos) {
				window.removeEventListener("scroll", updateScrollPos);
			}
		};
	}, [ref.current]);

	const updateScrollPos = () => {
		//change element scroll speed based on the scroll position of the visible element
		const scrollPos = window.pageYOffset;
		const elemPos = ref.current.getBoundingClientRect().top + scrollPos;
		console.log(elemPos, scrollPos);
	}
	return elemScrollPos;
}