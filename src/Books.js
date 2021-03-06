import React, { Component } from "react";
import Search from "./Search";
import axios from "axios"
import BookList from "./BookList"
// import GoogleBooks from "./models/books"

class Books extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchField: "",
            favorite: []
        }
    }

handleBooks = (event) => {
    event.preventDefault();
    console.log("clicked")
    const search = this.state.searchField
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    // .query({q: this.state.searchField})
    .then((data) => {
        this.setState({books:[...data.data.items]})
        console.log(this.state.books)
    })
}

        // eslint-disable-next-line no-undef
handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({searchField: event.target.value})
        }
favorite = (event) => {
    event.preventDefault();
    console.log("SAVED")
    this.setState({favorite: this.state.books})
}

    render() {
        return (
            <div className="books-div">
                <Search handleBooks = {this.handleBooks} handleSearch={this.handleSearch} />
                <BookList books = {this.state.books} favorite={this.favorite} />
            </div> 
        )
    }
}
export default Books