import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    acount: {
      username: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("Submitted", username);
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div className="container-fliud">
          <div className="row">
            <div className="col-md-4 col sm-4 col-xs-12" />
            <div className="col-md-4 col sm-4 col-xs-12">
              <form className="form-container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    autoFocus
                    value={this.state.ac}
                    id="username"
                    className="form-control"
                  />
                  <small className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input id="password" className="form-control" />
                </div>
                <button className="btn btn-success btn-block">Login</button>
              </form>
            </div>
            <div className="col-md-4 col sm-4 col-xs-12" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
