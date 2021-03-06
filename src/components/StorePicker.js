import React from "react";
import { getFunName } from "../helpers.js"

class StorePicker extends React.Component {
	// Alternative usage for selecting the StorePicker component
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	goToStore(event) {
		event.preventDefault();
		console.log("change url");
		// first grab text from box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// then display text and transition from / to /store:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{/* Text goes inside input */} 
				<h2>Please Enter Store Name</h2>
				<input type="text" required placeholder="Store Name" 
				  defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;