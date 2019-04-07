import React, { Component } from "react";
import Movies from "./component/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Rentals from "./component/rentals";
import Customers from "./component/customers";
import NotFound from "./component/notFound";
import "./App.css";
import NavBar from "./component/navbar";
import MovieForm from "./component/movieForm";

class App extends Component {
  render() {
    const navComponents = [
      { name: "Movies", link: "/movies" },
      { name: "Customers", link: "/customers" },
      { name: "Rentals", link: "/rentals" }
    ];

    return (
      <React.Fragment>
        <NavBar navComponents={navComponents} />
        <main className="App">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
