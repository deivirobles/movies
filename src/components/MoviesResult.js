import React from 'react'
import Movie from './Movie'


const MoviesResult = (props) => {
    return(
    <div className="row">
        <div className="col-12">
            {
                props.movies.map((movie, i)=>{
                    return (
                        <Movie key={i} image={movie.poster_path}/>
                    )
                })
            }
         </div>
    </div>
    )
}

export default MoviesResult;