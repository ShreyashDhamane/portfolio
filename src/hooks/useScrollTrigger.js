import React, { useEffect, useState, useRef } from 'react';

const useScrollTrigger = (elementRef, offsetTop = 0, offsetBottom = 0, division = 1) => {
    const [scrollValue, setScrollValue] = useState(0);

    const getScrollValue = (visibleRatio) => {
        let resetArr = visibleRatio;
        if (visibleRatio > 100) {
            resetArr = 100;
        } else if (visibleRatio < 0) {
            resetArr = 0;
        }

        const multiple = 100 / division;
        const newScrollVal = [...Array(division).keys()].map((item, index) => {
            const sectionVisibleRatio = visibleRatio >= index * multiple && visibleRatio <= (index + 1) * multiple ? (visibleRatio - (multiple * index)) * division : visibleRatio >= index * multiple ? 100 : 0;
            return {
                scrollVal: resetArr === 100 || resetArr === 0 ? resetArr : sectionVisibleRatio
            }
        })
        return newScrollVal;
    }

    useEffect(() => {
        const handleScroll = () => {
            const { top, bottom } = elementRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isVisible = top < windowHeight - offsetTop && bottom >= offsetBottom;

            if (isVisible) {
                const visibleRatio = Math.floor((windowHeight - top - offsetTop) / (windowHeight - offsetTop - offsetBottom) * 100);
                setScrollValue(getScrollValue(visibleRatio));

            } else if (top > windowHeight - offsetTop) {
                setScrollValue(-1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [elementRef, offsetTop, offsetBottom]);

    return scrollValue;
};

export default useScrollTrigger;