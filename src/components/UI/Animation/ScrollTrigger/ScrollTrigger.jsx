import React, { useRef, useEffect } from "react";

const ScrollTriggerParallax = ({ children, type = "default" }) => {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const element = parallaxRef.current;
        const height = element.clientHeight;
        const scrollHandler = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const parallaxOffset = -(scrollTop / height) * 100;

            console.log(parallaxOffset)
            // animate the element
            if (type === "default") {
                element.style.transform = `translate3d(0, ${parallaxOffset}%, 0)`;
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return <div ref={parallaxRef}>{children}</div>;
};

export default ScrollTriggerParallax;