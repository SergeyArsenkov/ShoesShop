import React from "react"

const Input = ({ handleChange, value, title, name, color }) => {
	return (
		<label className="sidebarLabelContainer">
			<input onChange={handleChange} value={value} type="radio" name={name} />
			<span style={{ backgroundColor: color }} className="checkmark"></span>
			{title}
		</label>
	)
}

export default Input
