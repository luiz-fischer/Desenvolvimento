import React from 'react'
import Tag from '../Tag'

import s from './TagList.module.scss'

const TagList = ({ tags }) => {
	return (
		<ul className={s.list}>
			{tags.map(tag => {
				return <Tag key={tag} name={tag} />
			})}
		</ul>
	)
}

export default TagList
