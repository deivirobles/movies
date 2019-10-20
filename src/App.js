import React, {Component}  from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import MovieResult from './components/MoviesResult'
import Pagination from './common/Pagination'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      searchTerms: '',
      totalResult: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = "58e798bf28ce921eb570c03fb0d70586";
  }
  
  handleSubmit = (e)=>{
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${this.state.searchTerms}`)
    .then(data => data.json())
    .then(data =>{
      this.setState({ movies: [...data.results], totalResult: data.total_results})
    })
    
  }

  handleChange = (e)=>{
    this.setState({ searchTerms: e.target.value})
  }

  nextPage = (pageNumber) =>{
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${this.state.searchTerms}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data =>{
      this.setState({ movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filterMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null

    this.setState({ currentMovie: filterMovie })
  }

  closeMovieIfo = () => {
    this.setState({ currentMovie: null })
  }


  render(){
    const numberPages = Math.floor(this.state.totalResult / 20);
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {
          this.state.searchTerms.length === 0 
          ? <Movies />
          : <MovieResult movies={this.state.movies}/>
        }
        
        { 
          this.state.totalResult > 20 
          ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
          : ''
        }
      </div>
    </BrowserRouter>
  );
}
}

export default App;
