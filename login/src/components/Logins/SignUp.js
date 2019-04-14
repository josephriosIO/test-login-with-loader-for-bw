import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div>
        <form>
          <input type="text" placeholder="enter name..." value={name} />
          <input type="email" placeholder="enter email..." value={email} />
          <input
            type="password"
            placeholder="enter password..."
            value={password}
          />
          <input
            type="text"
            placeholder="confirm password..."
            value={confirmPassword}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
