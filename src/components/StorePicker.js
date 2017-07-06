import React from "react";
import { getFunName } from "../helpers.js"

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				{/* Text goes inside input */} 
				<h2>Please enter store name</h2>
				<input type="text" required placeholder="Store Name" 
				  defaultValue={getFunName()} />
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

export default StorePicker;