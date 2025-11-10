import { FaRegStar } from "react-icons/fa"
import { IoBag } from "react-icons/io5"

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
	return (
		<>
			<section className="card">
				<img src={img} alt={title} className="cardImg" />
				<div className="cardDetail">
					<h3 className="cardTitle">{title}</h3>
					<section className="cardReviews">
						{star} {star} {star}
						<span className="totalReviews">{reviews}</span>
					</section>
					<section className="cardPrice">
						<div className="price">
							<del>{prevPrice}</del> {newPrice}
						</div>

						<div className="bag">
							<IoBag className="bagIcon" />
						</div>
					</section>
				</div>
			</section>
		</>
	)
}

export default Card
