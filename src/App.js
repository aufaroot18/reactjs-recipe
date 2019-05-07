import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

// API Key dari food2fork
const API_KEY = "8bf66259d30db71a84ed6ca7032e7c39";

class App extends Component {

  // membuat state
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    // mengambil value dari input
    const recipeName = e.target.elements.recipeName.value;

    // melakukan prevent default
    e.preventDefault();

    // mengakses API dari food2fork
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`) ;

    // mengubah ke format json
    const data = await api_call.json();
    
    // disimpan ke dalam state
    this.setState({recipes: data.recipes});
  }

  // componentDidMount
  componentDidMount() {
    const recipesUpdate = JSON.parse(localStorage.getItem("recipesUpdate"));
    this.setState({
      recipes: recipesUpdate,
    })
    console.log("Component Did Mount");
  }

  // componentDidUpdate
  componentDidUpdate() {
    const recipesUpdate = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipesUpdate", recipesUpdate);
    console.log("Component Did Update");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>        
      </div>
    );
  }
}

export default App;
