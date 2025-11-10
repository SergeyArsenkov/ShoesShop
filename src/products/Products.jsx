import Card from "../components/Card"
import "./Products.css"

const Products = ({ result }) => {
	return (
		<>
			<section className="cardContainer">{result}</section>
		</>
	)
}

export default Products
