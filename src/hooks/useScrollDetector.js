import { useState, useEffect, useRef } from "react";

const useScrollDetector = () => {
    const [scrollSpeed, setScrollSpeed] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("");
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const scrollSpeed = Math.abs(currentScrollY - prevScrollY.current);
            setScrollSpeed(scrollSpeed);

            const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up";
            setScrollDirection(scrollDirection);

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { scrollSpeed, scrollDirection };
};

export default useScrollDetector;