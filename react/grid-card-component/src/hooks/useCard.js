import CardReducer from '../reducers/CardReducer'
import { useEffect, useReducer } from 'react'

import DS from '../../Datasource'

const useCard = () => {
	const [{ isLoading, cardList }, dispatch] = useReducer(CardReducer, {
		isLoading: true,
		cardList: []
	})

	useEffect(() => {
		const fetchData = async function () {
			dispatch({ type: 'setCardList', data: DS.GET_CARDS })
		}
		fetchData()
		return () => {
			console.log('Cleaning up')
		}
	}, [])
	return { isLoading, cardList }
}
export default useCard
