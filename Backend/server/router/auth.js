const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const Prop = require("../model/propSchema");
router.get("/", (req, res) => {
  res.send("Hello from Server router");
});

router.post("/register", async (req, res) => {
  try {
    // const {name, email, phone, password, cpassword} = req.body;
    const { fname, lname, email, password } = req.body;
    console.log(req.body);
   
    const user = new User({ fname, lname, email, password });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.log(err);
  }
  //console.log(req.body);
  //res.json({message: req.body});
});

router.post("/login", (req, res) => {
  console.log(req.body.email)
  console.log(req.body.password)
  User.find({ "email": req.body.email, "password": req.body.password })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found" });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " });
    })//CLOSE CATCH
});
 

router.get('/disp', (req, res) => { 
  Prop.find()
    .then(getalldocumentsfrommongodb => {
      res.status(200).send(getalldocumentsfrommongodb);
    }) //CLOSE THEN
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
    });//CLOSE CATCH
}); //CLOSE CALLBACK FUNCTION BODY Line 110      


router.get("/add", (req, res) => {
  res.send("Hello from add");
});

router.post("/add", async (req, res) => {
  try {
    const { title, city, location, price, bedroom, bathroom, area } = req.body;
    console.log(req.body);
    const prop = new Prop({
      title,
      city,
      location,
      price,
      bedroom,
      bathroom,
      area,
    });
    await prop.save();
    res.status(201).json({ message: "Property Added Successfully" });
  } catch (err) {
    console.log(err);
  }
  //console.log(req.body);
  //res.json({message: req.body});
});

router.delete("/delete/:title", (req, res) => {
  Prop.findOneAndRemove({ title: req.params.title })
    .then((deleteddocument) => {
      if (deleteddocument != null) {
        res.status(200).send("Property Deleted Successfully!");
      } else {
        res.status(404).send("Invalid Name");
      }
    }) //CLOSE THEN
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Delete ",
      });
    });
});

module.exports = router;
