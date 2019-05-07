import React from 'react';
import {Link} from 'react-router-dom';

const API_KEY = "8bf66259d30db71a84ed6ca7032e7c39";

class Recipe extends React.Component {


	state = {
		activeRecipe: [],
	}

	componentDidMount = async () => {
		const rid = this.props.location.state.recipes;
		const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY}&rId=${rid}`) ;
		const res = await req.json();
		this.setState({activeRecipe: res.recipe});
		// console.log(this.state.activeRecipe.title);
	}

	render() {
		const recipe = this.state.activeRecipe;
		return (
			<div className="container mt-3">
				<div className="card w-50 m-auto">
					<img className="card-img-top" src={recipe.image_url} alt={recipe.title} />
					<div className="card-body">
						<h5 className="card-title">{recipe.title}</h5>
						<p className="card-text">Publisher: {recipe.publisher}</p>
						<p className="card-text">Website: <a href={recipe.source_url}>{recipe.title}</a></p>
						<button className="btn btn-primary">
							<Link to={"/"}><span className="text-white">Home</span></Link>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Recipe;