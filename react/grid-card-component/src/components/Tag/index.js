import React,  {useContext} from "react"
import s from "./Tag.module.scss"

import { ThemeContext } from "../../contexts/ThemeContext"

const Tag = ({ name }) => {

	const { isDark } = useContext(ThemeContext)

	return (
		<li>
			<span className={`me-1 fw-normal rounded-0 badge bg-dark ${!isDark() ? '': 'border border-white' }` }>{name}</span>
		</li>
	)
}

export default Tag
