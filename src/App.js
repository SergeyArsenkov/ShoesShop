import Navigation from "./navigation/Nav"
import Products from "./products/Products"
import Recommended from "./recommended/Recommended"
import Sidebar from "./sidebar/Sidebar"
import "./index.css"

//database
import data from "./db/data.js"
import { useState } from "react"
import Card from "./components/Card.jsx"

function App() {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [query, setQuery] = useState("")

	//--------------Input filter--------------
	const handleInputChange = e => {
		setQuery(e.target.value)
	}

	const filteredItems = data.filter(
		i => i.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
	)

	//--------------Radio filter--------------
	const handleChange = e => {
		setSelectedCategory(e.target.value)
	}

	//--------------Buttons filter--------------
	const handleClick = e => {
		setSelectedCategory(e.target.value)
	}

	function filteredData(product, selected, query) {
		let filteredProducts = product
		//--------------filtering Input items--------------
		if (query) filteredProducts = filteredItems

		//--------------selected filter--------------
		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, color, company, newPrice, title }) =>
					category === selected ||
					color === selected ||
					company === selected ||
					newPrice === selected ||
					title === selected
			)
		}
		return filteredProducts.map(
			({ img, title, star, reviews, newPrice, prevPrice }) => (
				<Card
					img={img}
					title={title}
					star={star}
					reviews={reviews}
					newPrice={newPrice}
					prevPrice={prevPrice}
				/>
			)
		)
	}
	const result = filteredData(data, selectedCategory, query)

	return (
		<>
			<Sidebar handleChange={handleChange} />
			<Navigation query={query} handleInputChange={handleInputChange} />
			<Recommended handleClick={handleClick} />
			<Products result={result} />
		</>
	)
}

export default App
