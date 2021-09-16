import React, { useState, useEffect, useContext } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import s from './Filter.module.scss'

import useTag from '../../../hooks/useTag'
import { FilterContext } from '../../../contexts/FilterContext'
import { ThemeContext } from "../../../contexts/ThemeContext"

const FilterMobile = () => {
	const [selected, setSelected] = useState([])
	const [options, setOptions] = useState([])

	const { tagList } = useTag()

	const { filterByTags, setFilterByTags } = useContext(FilterContext)
	const { isDark } = useContext(ThemeContext)

	const mapTags = tags =>
		tags.map(tag => ({
			label: tag.toUpperCase(),
			value: tag
		}))

	/**
	 * Side effects
	 */
	useEffect(() => {
		setSelected(mapTags(filterByTags))
	}, [filterByTags])

	useEffect(() => {
		setOptions(mapTags(tagList))
	}, [tagList])

	return (
		<div className={`${s.selector} d-block d-sm-none ${!isDark() ? '': 'text-dark' }`}>
			<p className="h6">Filter by:</p>
			{/* <pre>{JSON.stringify(selected)}</pre> */}
			<MultiSelect
				options={options}
				value={selected}
				onChange={selected => {
					const activeList = selected.map(s => s.value)
					setSelected(selected)
					setFilterByTags(activeList)
				}}
				labelledBy="Select"
				className={s.selector__tags}
			/>
		</div>
	)
}

export default FilterMobile
