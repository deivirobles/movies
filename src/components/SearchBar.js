import React, { Component } from 'react'


export default class SearchBar extends Component{
render(){
return(
<form action="">
<div className="input-group mb-3">
	<div className="input-group-prepend">
		<span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
	</div>
	<input placeholder="Search for a movie, series and videos" type="text" className="form-control"/>
</div>
</form>
)
}
}