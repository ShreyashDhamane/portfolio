import * as actionTypes from '../constants/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
	pageLoading: false,
	initialPageLoading: true,
	pageLoadingContent: {
		title: 'Welcome',
		subtitle: 'To my portfolio',
	},
	mouseEntered: false,
	cursorType: 'default',
	cursorImage: '',
}

const PageLoading = (state, action) => {
	return updateObject(state, { pageLoading: action.data })
}

const CursorType = (state, action) => {
	return updateObject(state, { cursorType: action.data })
}

const MouseEntered = (state, action) => {
	return updateObject(state, { mouseEntered: action.data })
}

const pageLoadingContent = (state, action) => {
	return updateObject(state, { pageLoadingContent: action.data })
}

const initialPageLoading = (state, action) => {
	return updateObject(state, { initialPageLoading: action.data })
}

const CursorImage = (state, action) => {
	return updateObject(state, { cursorImage: action.data })
}

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PAGE_LOADING:
			return PageLoading(state, action)
		case actionTypes.CURSOR_TYPE:
			return CursorType(state, action)
		case actionTypes.MOUSE_ENTERED:
			return MouseEntered(state, action)
		case actionTypes.PAGE_LOADING_CONTENT:
			return pageLoadingContent(state, action)
		case actionTypes.INITIAL_PAGE_LOADING:
			return initialPageLoading(state, action)
		case actionTypes.CURSOR_IMAGE:
			return CursorImage(state, action)
		default:
			return state
	}
}

export default mainReducer