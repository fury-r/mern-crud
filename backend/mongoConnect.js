const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

function connect(){
    console.log("db connected")
    mongoose.connect(uri, {useNewUrlParser: true});
}
module.exports={connect}