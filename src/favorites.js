import React, { Component } from "react";
import SavedBooks from "./SavedBooks";


class Favorited extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchField: "",
            favorite: []
        }
    }

    render() {
        return (
            <div className="books-div">
                <SavedBooks handleFav = {this.state.favorite}/>
            </div> 
        )
    }
}
export default Favorited