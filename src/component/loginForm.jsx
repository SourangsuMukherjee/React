import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div className="container-fliud">
          <div className="row">
            <div className="col-md-4 col sm-4 col-xs-12" />
            <div className="col-md-4 col sm-4 col-xs-12">
              <form className="form-container">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <imput id="username" className="form-control" />
                  <small className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <imput id="password" className="form-control" />
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
