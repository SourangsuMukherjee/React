import React, { Component } from "react";
import Movies from "./component/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Rentals from "./component/rentals";
import Customers from "./component/customers";
import NotFound from "./component/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
