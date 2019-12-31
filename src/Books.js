import React, { Component } from "react";
import Search from "./Search";
class Books extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchField: "",
        }
    }

        // eslint-disable-next-line no-undef
handleSearch = (event) => {
    console.log(event.target.value)
    this.setState({searchField: event.target.value})
        }


    render() {
        return (
            <div className="books-div">
                <Search handleSearch={this.handleSearch}/>
            </div>
        )
    }
}
export default Books