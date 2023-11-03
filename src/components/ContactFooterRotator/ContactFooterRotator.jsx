import React, { useCallback, useEffect, useState } from 'react'
import { MdOutlineMail } from 'react-icons/md';
import './ContactFooterRotator.scss';
import useScrollTrigger from '../../hooks/useScrollTrigger';
import arrowRight from '/public/assets/images/arrowRight.svg';

const ContactFooterRotator = () => {
    const contactRef = React.useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [scrollVal, setScrollVal] = useState(0);
    const limitTranslate = window.innerWidth < 800 ? 0.2 : 1;


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const body = document.body;
        setScrollVal((body.scrollHeight - window.scrollY - window.innerHeight) / 2);
    }

    const handleContactHover = (e, speed = 40) => {
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
        <div ref={contactRef} className={`Contact_Footer`} onMouseMove={handleContactHover} onMouseLeave={handleContactLeave} style={{ transform: `translateY(${scrollVal * limitTranslate}px)`, opacity: `${(200 - scrollVal) / 100}` }}
        >
            <div className="contact_wrapper" >
                <div className='text_rotator' style={styleTextRotator} >
                    <svg style={svgStyle} x="0px" y="0px" viewBox="0 0 200 200" enableBackground="new 0 0 200 200" xmlSpace="preserve">
                        <defs>
                            <path id="circlePath" d=" M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <g>
                            <text fill="#fff" font>
                                <textPath xlinkHref="#circlePath">GET IN TOUCH - GET IN TOUCH - </textPath>
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

export default ContactFooterRotator