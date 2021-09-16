import Image from "next/image"

const BackgroundImage = () => {
	return (
		<div className="absolute w-100 h-30r z-0 top-0">
            <div className="h-100 w-100 relative">
                <div className="absolute h-100 w-100 bg-dark z-5 top-0 opacity-70"></div>
				<Image
					src={`/static/img/hero-image.jpg`}
					alt={`Hero Image`}
					objectFit="cover"
					quality={60}
					layout="fill"
				/>
			</div>
		</div>
	)
}

export default BackgroundImage
