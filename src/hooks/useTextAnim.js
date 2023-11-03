import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { initialPageLoadTimeForAnim, pageLoadTimeForAnim } from '../shared/constants';

const useTextAnim = (text, delay = 0) => {
    const ref = useRef(null)
    const initialPageLoading = useSelector(state => state.main.initialPageLoading);
    const pageLoading = useSelector(state => state.main.pageLoading);

    const anim = () => {
        if (pageLoading === true || initialPageLoading === true) {
            const pageLoadTime = initialPageLoading === true ? initialPageLoadTimeForAnim : pageLoading === true ? pageLoadTimeForAnim : 0;
            setTimeout(() => {
                const characters = text.split('')
                ref.current.innerHTML = ''
                characters.forEach((letter, i) => {
                    if (letter === ' ') letter = '&nbsp;'
                    const div = document.createElement('div')
                    div.classList.add('letter')
                    div.innerHTML = letter
                    div.style.animationDelay = `${i * 10}ms`
                    ref.current.appendChild(div)
                })
            }, delay + pageLoadTime - 200)
        }
    }

    useEffect(() => {
        if (ref.current) {
            anim()
        }
        // return () => {
        //     if (ref.current) ref.current.innerHTML = ''
        // }
    }, [pageLoading])

    return ref
}

export default useTextAnim