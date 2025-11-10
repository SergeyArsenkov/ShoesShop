import { FaCartShopping } from "react-icons/fa6"
import Category from "./category/Category.jsx"
import Price from "./price/Price"
import Colors from "./colors/Colors"
import "./Siderbar.css"

const Sidebar = ({ handleChange }) => {
	return (
		<>
			<section className="sidebar">
				<div className="logoContainer">
					<h1>
						<FaCartShopping />
					</h1>
				</div>
				<Category handleChange={handleChange} />
				<Price handleChange={handleChange} />
				<Colors handleChange={handleChange} />
			</section>
		</>
	)
}

export default Sidebar
