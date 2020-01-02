import React from "react";
import './App.css';

const BookCard = (props)  => {
      return(
      
        <div className = "card-contain">
          <form>
            <img src = {props.image} alt = "missing"></img>
            <div className = "disc">
            <h2> {props.title} </h2>
            <h3> {props.author}</h3>
            <p> {props.published}</p>
            <button onClick={() => props.favorite()}> Save </button>
            </div>
            </form>
        </div>
      
      )
  }
export default BookCard