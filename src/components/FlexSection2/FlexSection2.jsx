import React from 'react'
import useScrollTrigger from '../../hooks/useScrollTrigger';
import * as actions from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import MotionDiv from '../UI/Animation/MotionDiv/MotionDiv';
import './FlexSection.scss'

const FlexSection2 = () => {
    const dispatch = useDispatch();
    const mouseEntered = useSelector(state => state.main.mouseEntered);
    const paraRef = React.useRef(null)
    const text = window.innerWidth < 700 ? [
        'I have created this',
        'portfolio from',
        'scratch in React ',
        'with zero dependencies',
        'I have made my own',
        'animation hooks and',
        'code for smooth and ',
        'performant animations'
    ] : [
        'I have created this portfolio',
        'from scratch in React with zero',
        'dependencies. I have made my own',
        'animation hooks and code for',
        'smooth and performant animations'
    ]
    const scrollValues = useScrollTrigger(paraRef, 50, 30, text.length);

    const hanldeMouseEnter = () => {
        dispatch(actions.setCursorType('link'));
    }

    const handleMouseLeave = () => {
        dispatch(actions.setCursorType('default'));
        dispatch(actions.setMouseEntered(false));
    }

    const animateCursor = () => {
        if (!mouseEntered) {
            dispatch(actions.setMouseEntered(true));
        }
    }

    const disableAnimationCursor = () => {
        dispatch(actions.setMouseEntered(false));
    }

    return (
        // <div className="Flex_section" onMouseEnter={hanldeMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="Flex_section" >
            <div className="content_wrapper">
                <div className="title_wrapper">
                    <MotionDiv from={{ transform: `translateY(100%)` }} to={{ transform: `translateY(0)` }} duration={600} scrollDiv={true} offsetTop={120} offsetBottom={40} reverse={false}>
                        <div className='small_title'>An insight</div>
                    </MotionDiv>
                </div>
                {/* 
                <div className='paragraph' ref={paraRef} onMouseEnter={animateCursor} onMouseLeave={disableAnimationCursor}> */}
                <div className='paragraph' ref={paraRef}>
                    {
                        text.map((item, index) => {
                            return (
                                <div className='line' key={index}>
                                    <div className="overlay" style={{ clipPath: `inset(0 ${100 - scrollValues[index]?.scrollVal}% 0 0px)` }}>{item}</div>
                                    <div className="text">{item}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FlexSection2