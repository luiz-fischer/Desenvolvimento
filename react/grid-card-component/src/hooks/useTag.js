import TagReducer from '../reducers/TagReducer'
import { useEffect, useReducer } from 'react'

import DS from '../../Datasource'

const useTag = () => {
	const [{ isLoading, tagList }, dispatch] = useReducer(TagReducer, {
		isLoading: true,
		tagList: []
	})

	useEffect(() => {
		const fetchData = async function () {
			dispatch({ type: 'setTagList', data: DS.GET_TAGS })
		}
		fetchData()
		return () => {
			console.log('Cleaning up')
		}
	}, [])
	return { isLoading, tagList }
}
export default useTag
