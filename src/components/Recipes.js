import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = (props) => (
	<div className="container">
		<div className="row">
			{props.recipes.map((recipes) => {
				return (
					<div className="col-4 mb-2" key={recipes.recipe_id}>
						<div className="card">
							<img className="card-img-top" src={recipes.image_url} alt={recipes.title} />
							<div className="card-body">
								<h5 className="card-title">
									{recipes.title.length < 20 ? `${recipes.title}` : `${recipes.title.substring(0, 25)}...`}
								</h5>
								<p className="card-text">Publisher: {recipes.publisher}</p>
								<button className="btn btn-primary btn-sm">
									<Link to={{ 
										pathname: `/recipe/${recipes.recipe_id}`,
										state: {recipes: recipes.recipe_id}
									}}>
										View Recipe
									</Link>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	</div>
);

export default Recipes;