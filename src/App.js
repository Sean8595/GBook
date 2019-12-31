import React, { Component } from "react";
import Books from "./Books"
import './App.css';

class App extends Component {
  render(){
      return(
          <div className = "App">
            <h1> Hello World</h1>
            <Books />
          </div>
      )
  }
}
export default App