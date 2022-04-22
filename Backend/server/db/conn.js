const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect('mongodb://localhost:27017/user-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopolgy: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connection Successful');
}).catch((err) => console.log('Connection Failed'));