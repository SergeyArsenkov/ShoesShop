import Input from "../../components/Input"
import "./Colors.css"

const Colors = ({ handleChange }) => {
	return (
		<div>
			<h2 className="sidebarTitle colorTitle">Colors</h2>

			<div>
				<label className="sidebarLabelContainer">
					<input onChange={handleChange} type="radio" value="" name="test3" />
					<span className="checkmark all"></span>All
				</label>
				<Input
					handleChange={handleChange}
					value="black"
					title="Black"
					color="black"
					name="test3"
				/>
				<Input
					handleChange={handleChange}
					value="blue"
					title="Blue"
					color="blue"
					name="test3"
				/>
				<Input
					handleChange={handleChange}
					value="red"
					title="Red"
					color="red"
					name="test3"
				/>
				<Input
					handleChange={handleChange}
					value="green"
					title="Green"
					color="green"
					name="test3"
				/>
				<label className="sidebarLabelContainer white">
					<input
						type="radio"
						onChange={handleChange}
						value="white"
						name="test3"
					/>
					<span
						className="checkmark"
						style={{
							background: "white",
							border: "2px solid black",
						}}
					></span>
					White
				</label>
			</div>
		</div>
	)
}

export default Colors
