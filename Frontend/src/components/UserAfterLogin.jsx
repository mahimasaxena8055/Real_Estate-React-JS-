import React from 'react'
import { Redirect, Link } from "react-router-dom";
import Navbar from './Navbar';

function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/login" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div>
        <Navbar />
        <div className="wrapper">
        <div className="form-wrapper">
        <br /> <br />
        <h3 class="margin">WELCOME </h3>
        <br/><br/>
        <Link to="/dispprop"><button type="button" class="btn btn-info margin">Go to Properties</button></Link>
      </div>
      </div>
      </div>
    )
  }
}

export default UserAfterLogin
