
import React, { useEffect, useState, useRef } from "react";
import './Marquee.scss'

const Marquee = ({
    style = {},
    className = "",
    pauseOnHover = true,
    direction = "left",
    speed = 20,
    children,
    background = 1
}) => {
    // React Hooks
    const [containerWidth, setContainerWidth] = useState(0);
    const [marqueeWidth, setMarqueeWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef(null);
    const marqueeRef = useRef(null);
    const [duration, setNewDuration] = useState(0);

    useEffect(() => {
        if (!isMounted) return;

        const calculateWidth = () => {
            // Find width of container and width of marquee
            if (marqueeRef.current && containerRef.current) {
                setContainerWidth(containerRef.current.getBoundingClientRect().width);
                setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
            }
        };

        calculateWidth();
        // Rerender on window resize
        window.addEventListener("resize", calculateWidth);
        return () => {
            window.removeEventListener("resize", calculateWidth);
        };
    }, [isMounted]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (marqueeWidth < containerWidth) {
            setNewDuration(containerWidth / speed);
        } else {
            setNewDuration(marqueeWidth / speed);
        }
    }, [containerWidth, marqueeWidth]);


    return (
        <>
            {!isMounted ? null : (
                <div
                    ref={containerRef}
                    style={{ ...style }}
                    className={className + " marquee-container" + ` b${background}`}
                >
                    <div
                        ref={marqueeRef}
                        style={{
                            ["--direction"]: direction === "left" ? "normal" : "reverse",
                            ["--duration"]: `${duration}s`,
                            ["--pause-on-hover"]: pauseOnHover ? "paused" : "running",
                        }}
                        className="marquee"
                    >
                        {children}
                    </div>
                    <div
                        style={{
                            ["--direction"]: direction === "left" ? "normal" : "reverse",
                            ["--duration"]: `${duration}s`,
                            ["--pause-on-hover"]: pauseOnHover ? "paused" : "running",
                        }}
                        className="marquee"
                        aria-hidden="true"
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Marquee;