import React, { useState } from "react";
import "../index.css";

function AdminLogin() {
  const [adminid, setAdminId] = useState("");
  const [adminpass, setAdminPass] = useState("");
  const [msg, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminid}`);
    console.log(`PASS: ${adminpass}`);

    if (adminid === "admin" && adminpass === "pass")
      setMessage("WELCOME ADMIN");
    else setMessage("INVALID UID OR PASSWORD");
  };
  return (
    <div className="container">
      <div className="agentlogin">
        <h3> ADMIN LOGIN </h3> <b> {msg} </b>{" "}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={adminid}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="ADMIN USER ID"
            required
          />
          <br />
          <br />
          <input
            type="password"
            value={adminpass}
            onChange={(e) => setAdminPass(e.target.value)}
            placeholder="ADMIN PASSWORD"
            required
          />
          <br />
          <br />
          <input type="submit" value="ADMIN LOGIN" />
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default AdminLogin;
