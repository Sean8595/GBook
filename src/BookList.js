import React from "react";
import './App.css';
import BookCard from "./BookCard";

const BookList = (props)  => {
      return(
          <div className = "list">
            {props.books.map((book, i) => {
                return <BookCard 
                key = {i}
                image = {book.volumeInfo.imageLinks.thumbnail}
                title = {book.volumeInfo.title}
                author = {book.volumeInfo.author}
                published = {book.volumeInfo.publishedDate}
                />
            })
         }
          </div>
      )
  }
export default BookList