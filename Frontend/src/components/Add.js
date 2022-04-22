import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Registration() {
  const [ptitle, setPTitle] = useState("");
  const [pcity, setPCity] = useState("");
  const [plocation, setPLocation] = useState("");
  const [pprice, setPPrice] = useState("");
  const [pbed, setPBed] = useState("");
  const [pbath, setPBath] = useState("");
  const [parea, setPArea] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeTitle = (e) => setPTitle(e.target.value);
  const onChangeCity = (e) => setPCity(e.target.value);
  const onChangeLocation = (e) => setPLocation(e.target.value);
  const onChangePrice = (e) => setPPrice(e.target.value);
  const onChangeBed = (e) => setPBed(e.target.value);
  const onChangeBath = (e) => setPBath(e.target.value);
  const onChangeArea = (e) => setPArea(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`NAME: ${ptitle}`);
    console.log(`EMAIL: ${pcity}`);

    const propinfo = {
      title: ptitle,
      city: pcity,
      location: plocation,
      price: pprice,
      bedroom: pbed,
      bathroom: pbath,
      area: parea,
    };

    axios.post("http://localhost:4000/add", propinfo).then((res) => {
      console.log(res.data);
      setMessage("Property Added Successfully");
    });

    setPTitle("");
    setPCity("");
    setPLocation("");
    setPPrice("");
    setPBed("");
    setPBath("");
    setPArea("");
  };

  return (
    <div>
      <Navbar />
      <br />
      <div class="wrapper">
        <div class="form-wrapper">
          <h3>Add Properties</h3>
          <h4 style={{ color: "brown" }}> {msg}</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={ptitle}
              onChange={onChangeTitle}
              placeholder="Enter Title"
              required
            />
            <br />
            <br />

            <input
              type="text"
              value={pcity}
              onChange={onChangeCity}
              placeholder="Enter City"
              required
            />
            <br />
            <br />

            <input
              type="text"
              value={plocation}
              onChange={onChangeLocation}
              placeholder="Enter Location"
              required
            />
            <br />
            <br />

            <input
              type="number"
              value={pprice}
              onChange={onChangePrice}
              placeholder="Enter Price"
            />
            <br />
            <br />

            <input
              type="number"
              value={pbed}
              onChange={onChangeBed}
              placeholder="No. of bedrooms"
              required
            />
            <br />
            <br />

            <input
              type="number"
              value={pbath}
              onChange={onChangeBath}
              placeholder="No. of bathrooms"
            />

            <input
              type="number"
              value={parea}
              onChange={onChangeArea}
              placeholder="Area"
              required
            />
            <br />
            
            <input type="submit" value="REGISTER" className="btn btn-primary" />
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
