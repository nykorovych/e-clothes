import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I have an account</h2>
        <span>Sign with ur email and passwor</span>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            required
            label="email"
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with Goggle
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
