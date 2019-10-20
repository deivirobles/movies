import React from 'react'
import Movie from './Movie'


const MoviesResult = (props) => {
    return(
    <div className="row">
            {
                props.movies.map((movie, i)=>{
                    return (
                        <Movie 
                        key={i} 
                        image={movie.poster_path} 
                        title={movie.title} 
                        voteAverage={movie.vote_average}
                        relaseDate={movie.release_date}
                        genre={movie.genre_ids}
                        overview={movie.overview}
                        />
                    )
                })
            }

    </div>
    )
}

export default MoviesResult;