// const express = require('express');
// const router = express.Router();
// const Prop = require('../model/propSchema');

// router.post('/add', async (req, res) => {
//     try{
//     const {title, city, location, price, bedroom, bathroom, area} = req.body;
//     console.log(req.body);
//     const prop = new Prop({title, city, location, price, bedroom, bathroom, area});
//     await prop.save();
//     res.status(201).json({ message: "Property Added Successfully"});
//     }catch(err){
//         console.log(err);
//     }
//     //console.log(req.body);
//     //res.json({message: req.body});
// });