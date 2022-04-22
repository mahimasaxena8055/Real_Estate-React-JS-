import React, { Component } from "react";
import "../app.css";
import axios from 'axios';
import Navbar from './Navbar';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstname}
        Last Name: ${this.state.lastname}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    };

    const userinfo = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:4000/register', userinfo)
            .then((res) => {
                console.log(res.data)
                return(
                <div>{alert.show("Account Created")}</div>)

            }).catch((error) => {
                console.log(error)
            });

  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstname":
        formErrors.firstname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastname":
        formErrors.lastname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  // axios.post('mongodb://localhost:27017/user-api/register', empinfo)
  //           .then(res => {
  //               console.log(res.data)
  //               setMessage('REGISTRATION SUCCESSFUL')
  //          });
  onButtonClick = () => {
    window.alert('Account Created')
  };

  render() {
    const { formErrors } = this.state;

    return (
      
      <div>
        <Navbar />
      <div className="wrapper">
        <div className="form-wrapper">
          <h1> Create Account </h1>{" "}
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstname">
              <label htmlFor="firstname"> First Name </label>{" "}
              <input
                className={formErrors.firstname.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="firstname"
                value={this.state.firstname}
                noValidate
                onChange={this.handleChange}
              />{" "}
              {formErrors.firstname.length > 0 && (
                <span className="errorMessage"> {formErrors.firstname} </span>
              )}{" "}
            </div>{" "}
            <div className="lastname">
              <label htmlFor="lastname"> Last Name </label>{" "}
              <input
                className={formErrors.lastname.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastname"
                value={this.state.lastname}
                noValidate
                onChange={this.handleChange}
              />{" "}
              {formErrors.lastname.length > 0 && (
                <span className="errorMessage"> {formErrors.lastname} </span>
              )}{" "}
            </div>{" "}
            <div className="email">
              <label htmlFor="email"> Email </label>{" "}
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                noValidate
                onChange={this.handleChange}
              />{" "}
              {formErrors.email.length > 0 && (
                <span className="errorMessage"> {formErrors.email} </span>
              )}{" "}
            </div>{" "}
            <div className="password">
              <label htmlFor="password"> Password </label>{" "}
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />{" "}
              {formErrors.password.length > 0 && (
                <span className="errorMessage"> {formErrors.password} </span>
              )}{" "}
            </div>{" "}
            <div className="createAccount">
              <button type="submit" onClick={this.onButtonClick}> Create Account </button>{" "}
              <a href="login"> Already Have an Account ? </a>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
      </div>
    );
  }
}

export default Signup;
