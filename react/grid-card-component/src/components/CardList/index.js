import React, { useContext } from "react"
import Card from "../Card"
import FilterDesktop from "../Filter/Desktop"
import FilterMobile from "../Filter/Mobile"
import ModalCard from "../ModalCard"

import useCard from "../../hooks/useCard"

import { FilterContext } from "../../contexts/FilterContext"
import { ModalContext } from "../../contexts/ModalContext"

import s from "./CardList.module.scss"
import { ThemeContext } from "../../contexts/ThemeContext"

const CardList = () => {
	const { isLoading, cardList } = useCard()

	const { isDark } = useContext(ThemeContext)

	const { filterByTags } = useContext(FilterContext)
	const { setEntity, setModalIsOpen } = useContext(ModalContext)

	const cardHasTags = (card, tags) => {
		return tags.length > 0
			? card.tags.filter(value => tags.includes(value.toLowerCase())).length > 0
			: true
	}

	const onReadMore = card => {
		setEntity(card)
		setModalIsOpen(true)
	}

	return (
		<div className={`shadow-sm p-3 mb-5 rounded ${!isDark() ? 'bg-white': 'bg-dark border border-primary' }`} id="cards">
			{isLoading && <h4>Loading...</h4>}
			{!isLoading && (
				<>
					<div className={`p-2`}>
						<FilterDesktop />
						<FilterMobile />
					</div>
					<hr className={`mt-3`} />
					<div className={`row`}>
						{cardList
							.filter(card => cardHasTags(card, filterByTags))
							.map(card => (
								<Card key={card.id} card={card} onReadMore={onReadMore} />
							))}
					</div>
					<ModalCard />
				</>
			)}
		</div>
	)
}

export default CardList
