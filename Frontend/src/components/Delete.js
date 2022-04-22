import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Delete() {
  const [title, setTitle] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    setMessage(""); //REMOVE ERROR MSG
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .delete("http://localhost:4000/delete/" + title)
      .then((res) => {
        console.log(res.data);
        setMessage("Successfully Deleted");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Invalid Title");
      });

    setTitle("");
  };

  return (
    <div className="agentlogin">
      <Navbar />
      <br />
      <div class="wrapper">
        <div class="form-wrapper">
      <h3> Enter Title of Property to Delete </h3>{" "}
      <b style={{ color: "red" }}> {msg} </b>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
          required
        />
        <br />
        <br />
        <input
          type="submit"
          value="Delete Property"
          className="btn btn-danger"
        />
      </form>{" "}
      </div>
      </div>
    </div>
  );
}

export default Delete;
