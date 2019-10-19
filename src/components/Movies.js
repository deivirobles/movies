import React, { Component } from 'react'
import axios from 'axios'

export default class Movies extends Component{

    state = {
        movies: []
    }

    async componentDidMount(){
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=58e798bf28ce921eb570c03fb0d70586')
        const data = await res.json()
        this.setState({movies: data.results})
        console.log(this.state.movies)
    }

    render(){
        return(
            <div>
            <p>Movies</p>
            {
                this.state.movies.map(movie =>{
                    return(
                        <li key={movie.id}>{movie.title}</li>
                    )
                })
            }
        </div>
        )
    }
}