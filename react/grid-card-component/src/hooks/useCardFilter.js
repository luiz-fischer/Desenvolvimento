import { useState } from 'react'

function useCardFilter() {
	const [filterByTags, setFilterByTags] = useState([])

	return {
		filterByTags,
		setFilterByTags
	}
}

export default useCardFilter
