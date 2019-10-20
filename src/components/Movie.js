import React, { Component } from 'react'

const Movie = (props) => {
    return(
    <div className="card">
        <div className="row">
            <div className="col-4">
                {
                    props.image == null 
                    ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card img" style={{ width: "100%", height:"360" }}/>
                    : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card img" style={{ width: "100%", height:"360" }}/>
                }
            </div>
            <div className="col"></div>
        </div>
    </div>
    )
}

export default Movie;