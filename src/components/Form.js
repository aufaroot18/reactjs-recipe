import React from 'react';

const Form = (props) => {
	return(
		<form onSubmit={props.getRecipe} className="form-inline justify-content-center mb-2">
			<div className="form-group">
				<input className="form-control mx-3" type="text" name="recipeName" placeholder="Makanan" />
			</div>
			<button type="submit" className="btn btn-primary">Search</button>
		</form>
	);
};

export default Form;