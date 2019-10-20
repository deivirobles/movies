import React, {Component}  from 'react';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import MovieResult from './components/MoviesResult'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      searchTerms: '',
    }
    this.apiKey = "58e798bf28ce921eb570c03fb0d70586";
  }
  handleSubmit = (e)=>{
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerms}`)
    .then(data => data.json())
    .then(data =>{
      
      this.setState({ movies: [...data.results]})
      console.log(data)
    })
  }

  handleChange = (e)=>{
    this.setState({ searchTerms: e.target.value})
  }
  render(){
  return (
    <div className="container-fluid">
      <Navbar />
      <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <MovieResult movies={this.state.movies}/>

    </div>
  );
}
}

export default App;
