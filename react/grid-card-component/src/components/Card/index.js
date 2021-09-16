import React, {useContext} from "react"
import Image from "next/image"

import TagList from "../TagList"
import Ribbon from "../Ribbon"

import s from "./Card.module.scss"
import { createShimmerImage } from "../../utils"
import { ThemeContext } from "../../contexts/ThemeContext"

const Card = ({ card, onReadMore }) => {
	const isFeatured = featured => featured == "1"

	const { isDark } = useContext(ThemeContext)

	const { id, title, image, description, featured, tags } = card

	return (
		<div
			className={`col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center`}
			data-item="card"
		>
			<div className={`${s.scene} ${!isDark() ? '' : s["scene--dark"] }`} >
				<div className={s.card} >
					<div className={`${s["card__face"]} ${s["card__face--front"]}`}>
						<div className={s["card__image"]}>
							<Image
								src={image}
								alt={`Image ${id}`}
								layout="fill"
								placeholder="blur"
								blurDataURL={createShimmerImage(400, 300)}
							/>
						</div>
						<div className={s["card__body"]}>
							<h2 className={s["card__title"]}>{title}</h2>
							<p className={s["card__description"]}>{description}</p>
						</div>
						{isFeatured(featured) && <Ribbon />}
					</div>
					<div className={`${s["card__face"]} ${s["card__face--back"]}`}>
						<div className={s["card__body"]}>
							<h2 className={s["card__title"]}>{id}</h2>
							<TagList tags={tags} />

							<a
								className={s["card__readmore"]}
								onClick={() => onReadMore(card)}
							>
								Read more...
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
