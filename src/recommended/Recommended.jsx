import Button from "../components/Button"
import "./Recommended.css"

const Recommended = ({ handleClick }) => {
	return (
		<>
			<div>
				<h2 className="recommendedTitle">Recommended</h2>
				<div className="recommendedFlex">
					<Button onClickHandler={handleClick} value="" title="All products" />
					<Button onClickHandler={handleClick} value="Nike" title="Nike" />
					<Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
					<Button onClickHandler={handleClick} value="Puma" title="Puma" />
					<Button onClickHandler={handleClick} value="Vans" title="Vans" />
				</div>
			</div>
		</>
	)
}

export default Recommended
