
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validateName=(name)=>{
    var re=/[^A-Za-z_ ]+/
   return !re.test(name)
}
var validateEmail=(email)=>{
    var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}
const User=new Schema({
    name:{
        type:String,
        required:[true,'Name required'],
        validate:[validateName,'Special characters  and Numbers are not allowed'],
      
    },
    email:{
        type:String,
        required:[true,'Email required'],
        validate:[validateEmail,'Please provide a valid email'],
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }

})
const Users=mongoose.model("Users",User)
module.exports={
    Users
}