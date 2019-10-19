import React, { Component } from 'react'
import Style from './styles/Movies.css'


export default class Movies extends Component{

    state = {
        movies: [],
        genre: [],
        urlImage: 'http://image.tmdb.org/t/p/w185',
    }

    async componentDidMount(){
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=58e798bf28ce921eb570c03fb0d70586')
        const data = await res.json()
        this.setState({movies: data.results})

        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=58e798bf28ce921eb570c03fb0d70586')
        const info = await response.json()
        this.setState({genre: info.genres})
    }

    render(){
        const allMovies = this.state.movies.map(movie =>{
                return(
                    <div className="col-6 col-sm-12 p-4" key={movie.id}>
                        <div className="row cardMovie">
                            <div className="col-4">
                                <img src="http://image.tmdb.org/t/p/w185/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" className="img-fluid"/>
                            </div>
                            <div className="col movieData">
                                <div className="row">
                                    <div className="col-10">
                                        <h2>{movie.title}</h2>        
                                    </div>
                                    <div className="col text-right movieInfo">
                                        <p>{movie.vote_average}</p>
                                    </div>
                                </div>                                
                                <span>{movie.release_date} () | {movie.genre_ids}</span>
                                <p className="pt-4 font-weight-lighter">{movie.overview}</p>
                                <div className="row pb-4 pt-4">
                                    <div className="col">
                                        <button type="button" className="btn btn-outline-info">Show Trailer</button>
                                    </div>
                                    <div className="col text-right">
                                        <p>Add to Favorites &nbsp;<i className="fa fa-heart"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                )
            })
        
        return(
            <div className="row">
                {allMovies}
            </div>
        )
    }
}