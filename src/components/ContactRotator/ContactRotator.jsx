import React, { useCallback, useEffect, useState } from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import './ContactRotator.scss';

const ContactRotator = () => {
    const contactRef = React.useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [contactActive, setContactActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
        if (scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }, [scrollY])

    const handleContactHover = (e, speed = 40) => {
        if (contactActive) return;
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

    const handleContactClick = (e) => {
        setContactActive(state => !state);
        const link = contactRef.current;
        link.style.transform = `translate(0, 0)`;
    }

    const styleTextRotator = {
        transform: `rotate(${contactActive ? 0 : scrollY * 0.4}deg)`,
    }

    const links = [
        {
            link: true,
            icon: <AiFillGithub />,
            rotation: '10deg',
        },
        {
            link: true,
            icon: <IoLogoLinkedin />,
            rotation: '35deg',
        }, {
            link: false,
            icon: <HiMail />,
            rotation: '60deg',
        }
    ]

    const svgStyle = {
        opacity: `${contactActive ? '0' : '1'}`,
        scale: `${contactActive ? '0' : '1'}`,
        transitionDelay: `${contactActive ? '0s' : '0.3s'}`,
    }

    return (
        <div ref={contactRef} className={`Contact_rotator ${scrolled ? 'scrolled' : ''}`} onMouseMove={handleContactHover} onMouseLeave={handleContactLeave}

        >
            <div className="contact_wrapper" >
                <div className='text_rotator' style={styleTextRotator} >
                    <svg style={svgStyle} x="0px" y="0px" viewBox="0 0 200 200" enableBackground="new 0 0 200 200" xmlSpace="preserve">
                        <defs>
                            <path id="circlePath" d=" M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <g>
                            <text fill="#fff" font>
                                <textPath xlinkHref="#circlePath">CONTACT ME • GET IN TOUCH •</textPath>
                            </text>
                        </g>
                    </svg>
                </div>
                <div className="contact" onClick={handleContactClick}>
                    <MdOutlineMail />
                </div>
                <div className="link_container">
                    <div className="link_list">
                        {
                            links.map((link, i) => {
                                const linkStyle = {
                                    transform: `${!contactActive ? `rotate(0) translate(8rem, -4.3rem)` : `rotate(${link.rotation}) `}`,
                                    transitionDelay: `${i * 0.1}s`,
                                }

                                return (
                                    <div className="link" style={linkStyle}>
                                        {link.icon}
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactRotator