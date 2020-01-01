import React from "react";
import './App.css';

const Search = (props)  => {
      return(
          <div className = "searchArea">
              <form onSubmit = {props.handleBooks} >
                  <input onChange ={props.handleSearch} type = "text"/>
                  <button type="submit">Search</button>
                  <button onClick={props.favoriteList}>Favorites</button>
              </form>
          </div>
      )
  }
export default Search