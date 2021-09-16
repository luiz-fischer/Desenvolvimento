import React from 'react'

import s from './Ribbon.module.scss'

const Ribbon = () => {
	return (
		<div className={`${s['ribbon__area']}`}>
			<div className={`${s['ribbon__color']} ${s['ribbon__color--black']}`}>
				FEATURED
			</div>
		</div>
	)
}

export default Ribbon
