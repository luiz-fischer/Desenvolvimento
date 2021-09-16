const Hero = () => {
	return (
		<section className="px-4 py-5 my-5 text-center">
			<h1 role="heading" className="display-5 fw-bold mt-5 text-white">Leonardo/s Tech Cards</h1>
			<div className="col-lg-6 mx-auto">
				<p className="lead mb-4 text-white">
					Welcome to our awesome blog!
				</p>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<a
                        href="#cards"
						className="btn btn-primary btn-lg px-4 gap-3"
					>
						Check out the cards
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
