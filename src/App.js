import React, { Component } from "react";
import logo from "./logo.svg";
import Movies from "./component/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Hello World</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
