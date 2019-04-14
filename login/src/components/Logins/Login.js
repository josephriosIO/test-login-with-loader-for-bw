import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="enter email..." value={email} />
          <input
            type="password"
            placeholder="enter password..."
            value={password}
          />
          <button>Sign In</button>
        </form>
        <h2>
          if you don't have an account, <Link to="/signup">sign up here</Link>
        </h2>
      </div>
    );
  }
}

export default Login;
