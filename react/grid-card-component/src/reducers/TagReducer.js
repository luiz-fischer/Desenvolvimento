const TagReducer = (state, action) => {
	switch (action.type) {
		case 'setTagList': {
			return { ...state, tagList: action.data, isLoading: false }
		}
		default:
			return state
	}
}
export default TagReducer
