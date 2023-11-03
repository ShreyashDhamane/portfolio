import React, { useCallback, useEffect, useState } from 'react'
import { MdOutlineMail } from 'react-icons/md';
import './ContactMe.scss';
import arrowRight from '/public/assets/images/arrowRight.svg';
import { useSelector } from 'react-redux';
import { initialPageLoadTimeForAnim, pageLoadTimeForAnim } from '../../shared/constants';

const ContactMe = () => {
    const contactRef = React.useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [contactActive, setContactActive] = useState(false);

    const initialPageLoading = useSelector(state => state.main.initialPageLoading);
    const pageLoading = useSelector(state => state.main.pageLoading);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        if (pageLoading === true || initialPageLoading === true) {
            const pageLoadTime = initialPageLoading === true ? initialPageLoadTimeForAnim : pageLoading === true ? pageLoadTimeForAnim : 0;
            setTimeout(() => {
                setContactActive(true);
            }, pageLoadTime)
        }
    }, [pageLoading]);

    const handleContactHover = (e, speed = 30) => {
        const link = contactRef.current;
        const width = link.offsetWidth;
        const height = link.offsetHeight;
        const x = e.clientX - link.getBoundingClientRect().left;
        const y = e.clientY - link.getBoundingClientRect().top;
        const move = speed;
        const xMove = (x / width * (move * 2)) - move;
        const yMove = (y / height * (move * 2)) - move;
        link.style.transform = `translate(${xMove}px, ${yMove}px)`;
    }

    const handleContactLeave = (e, index, custom = true) => {
        const link = contactRef.current;
        link.style.transform = `translate(0, 0)`;
    }

    const styleTextRotator = {
        transform: `rotate(${scrollY * 0.4}deg)`,
    }


    const svgStyle = {
        opacity: '1',
        scale: '1',
        transitionDelay: '0.3s',
    }

    return (
        <div ref={contactRef} className={`Contact_me ${contactActive ? 'active' : ''} `} onMouseMove={handleContactHover} onMouseLeave={handleContactLeave}
        >
            <div className="contact_wrapper">
                <div className='text_rotator' style={styleTextRotator} >
                    <svg style={svgStyle} x="0px" y="0px" viewBox="0 0 200 200" enableBackground="new 0 0 200 200" xmlSpace="preserve">
                        <defs>
                            <path id="circlePath" d=" M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <g>
                            <text fill="#fff" font>
                                <textPath xlinkHref="#circlePath">CONTACT ME • GET IN TOUCH • </textPath>
                            </text>
                        </g>
                    </svg>
                </div>
                <div className="contact" >
                    <img src={arrowRight} />
                </div>

            </div>

        </div>
    )
}

export default ContactMe