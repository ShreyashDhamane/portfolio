import * as actionTypes from '../constants/actionTypes';

export const setPageLoading = (data) => {
	return {
		type: actionTypes.PAGE_LOADING,
		data: data,
	};
}

export const setCursorType = (data) => {
	return {
		type: actionTypes.CURSOR_TYPE,
		data: data,
	};
}

export const setMouseEntered = (data) => {
	return {
		type: actionTypes.MOUSE_ENTERED,
		data: data,
	};
}

export const setPageLoadingContent = (data) => {
	return {
		type: actionTypes.PAGE_LOADING_CONTENT,
		data: data,
	};
}

export const setInitialPageLoading = (data) => {
	return {
		type: actionTypes.INITIAL_PAGE_LOADING,
		data: data,
	};
}

export const setCursorImage = (data) => {
	return {
		type: actionTypes.CURSOR_IMAGE,
		data: data,
	};
}





