const CardReducer = (state, action) => {
	switch (action.type) {
		case 'setCardList': {
			return { ...state, cardList: action.data, isLoading: false }
		}
		case 'setFilter': {
			return { ...state, filterList: action.data }
		}
		default:
			return state
	}
}
export default CardReducer
