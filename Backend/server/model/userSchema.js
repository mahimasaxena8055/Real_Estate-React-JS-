const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fname: {
        type: String, 
        required: true
    },
    lname: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique:[true, 'Email Id already present'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    // phone: {
    //     type: Number, 
    //     required: true
    // },
    password: {
        type: String, 
        required: true
    },
    // cpassword: {
    //     type: String, 
    //     required: true
    // },
});

//hash hashing password bfore saving the data
userSchema.pre('save', async function (next){
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 12);
        // this.cpassword = bcrypt.hash(this.cpassword, 12);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
