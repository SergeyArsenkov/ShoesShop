import { FaHeart } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"
import { HiUserAdd } from "react-icons/hi"
import "./Nav.css"

const Nav = ({ query, handleInputChange }) => {
	return (
		<nav>
			<div className="navContainer">
				<input
					value={query}
					onChange={handleInputChange}
					type="text"
					placeholder="Enter your search shoes:"
					className="searchInput"
				/>
			</div>
			<div className="profileContainer">
				<a href="#1">
					<FaHeart className="navIcons" />
				</a>
				<a href="#2">
					<FaShoppingCart className="navIcons" />
				</a>
				<a href="#3">
					<HiUserAdd className="navIcons" />
				</a>
			</div>
		</nav>
	)
}

export default Nav
