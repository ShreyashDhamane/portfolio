import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as actions from '../../../store/actions/index'

const CustomLink = ({ children, to, href, setSidebarActive, typeOnLeave, title, subtitle, className, animationDelay = 0 }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()

	const clickLink = () => {
		if (to.includes('#')) {
			const query = to.split('#')[1];
			navigate('/?section=' + query, { replace: true });
		} else {
			setTimeout(() => {
				navigate(to || href)
			}, 500)
		}

		dispatch(actions.setPageLoading(true));
		dispatch(actions.setCursorType(typeOnLeave || 'default'));
		dispatch(actions.setPageLoadingContent({ title, subtitle }));
		if (setSidebarActive) {
			setTimeout(() => {
				setSidebarActive(false);
			}, 1000)
		}
	}

	const disableLink = (e) => {
		e.preventDefault();
	}

	return (
		// <div style={{ width: 'max-content' }} onClick={to === window.location.pathname ? disableLink : clickLink}>{children}</div>
		<div className={className} style={{ width: 'max-content', animationDelay: `${animationDelay}s` }} onClick={clickLink}>{children}</div>
	)
}

export default CustomLink