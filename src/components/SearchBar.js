import React from 'react'

const SearchBar = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <input 
          placeholder="Search for a movie, series and videos" 
          type="text" 
          className="form-control" 
          onChange={props.handleChange}
        />
    </form>
  )
}

export default SearchBar;