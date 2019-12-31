import React from "react";
import './App.css';

const Search = (props)  => {
      return(
          <div className = "searchArea">
              <form >
                  <input onChange ={props.handleSearch} type = "text"/>
                  <button type="submit">Search</button>
              </form>
          </div>
      )
  }
export default Search