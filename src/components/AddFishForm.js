import React from "react";

class AddFishForm extends React.Component {
	createFish(event) {
		event.preventDefault();
		console.log("Fish created: ");
		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}
		this.props.addFish(fish);
		this.fishForm.reset();
	}
	render() {
		return (
			<form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
			  <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
			  <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
			  <select>
			   <option value="available">Fresh!</option>
			   <option value="unavailable">Sold Out!</option>
			  </select>
			  <input ref={(input) => this.status = input} type="text" placeholder="Fish Status" />
			  <textarea ref={(input) => this.desc = input} type="text" placeholder="Fish Desc"></textarea>
			  <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
			  <button type="submit">+ Add Items</button>
			</form>
		)
	}
}

AddFishForm.propTypes = {
	addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;