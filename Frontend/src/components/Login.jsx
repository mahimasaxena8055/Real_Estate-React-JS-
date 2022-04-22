// import React, { Component } from "react";

// export default class Login extends Component {
//   render() {
//     return (
//       <form>
//         <h3> Sign In </h3>
//         <div className="form-group">
//           <label> Email address </label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group">
//           <label> Password </label>{" "}
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               {" "}
//               Remember me{" "}
//             </label>{" "}
//           </div>{" "}
//         </div>

//         <button type="submit" className="btn btn-primary btn-block">
//           {" "}
//           Submit{" "}
//         </button>
//         <p className="forgot-password text-right">
//           Forgot <a href="#"> password ? </a>
//         </p>
//       </form>
//     );
//   }
// }

import React, { useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';

function Login(props) {
  const [uemail, setUserEmail] = useState("");
  const [upass, setUserPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeUserEmail = (e) => setUserEmail(e.target.value);
  const onChangeUserPass = (e) => setUserPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${uemail}`);
    console.log(`PASS: ${upass}`);

    const userlogininfo = {
      email: uemail,
      password: upass
    }

    axios.post('http://localhost:4000/login', userlogininfo)
      .then(res => {
        console.log(res.data)
        console.log(res.data[0].email)
        console.log(res.data[0].name)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].email)
        sessionStorage.setItem("username", res.data[0].name)
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('Invalid Credentials')
      })

    setUserEmail('')
    setUserPass('')
  }

  return (
    <div>
      <Navbar />
      <br />
      <div class="wrapper">
      <div class="form-wrapper">
      <h1 >USER LOGIN</h1>
      <b style={{ color: "red" }}> {msg} </b>
      <form onSubmit={handleSubmit}>
        <input type="email" value={uemail}
          onChange={onChangeUserEmail}
          placeholder="Enter Email"
          required />
        <br /><br />

        <input type="password" value={upass}
          placeholder="Enter Password"
          onChange={onChangeUserPass}
          required />
        <br /><br />
        <input type="submit" value="LOGIN" className="btn btn-success" />
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login
