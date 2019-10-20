import React from 'react'

const Movie = (props) => {
    return(
        <div className="col-md-6 col-sm-12 p-4">
            <div className="row cardMovie">
                <div className="col-4">
                    {
                        props.image == null 
                        ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="default img" style={{ width: "100%", height:"360" }}/>
                        : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card img" style={{ width: "100%", height:"360" }}/>
                    }
                </div>
                <div className="col movieData">
                    <div className="row">
                        <div className="col-10">
                            <h2>{props.title}</h2>        
                        </div>
                        <div className="col text-right movieInfo">
                            <p>{props.voteAverage}</p>
                        </div>
                    </div>                                
                    <span>{props.relaseDate} | {props.genre}</span>
                    <p className="pt-4 font-weight-lighter">{props.overview}</p>
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
}

export default Movie;