const mongoose = require('mongoose');
const validator = require('email-validator');

const db = require('../secrets');

mongoose.connect(db.link).then(function(){
    // console.log('connected');
})
.catch(function(err){
    console.log('err');
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        valid:function(){
            return validator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        min : 8,
        // unique:true
    },
    confirmPassword:{
        type : String,
        required : true,
        // unique : true
        min : 8,
        valid:function(){
            return this.password == this.confirmPassword;
        }
    }
});

const userModel = mongoose.model('userModel' , userSchema);

(async function createUser(){
    let user = {
        name : 'Anish Gupta',
        age : 21,
        email : 'anishgupta25220@gmail.com',
        password : 'kartik25',
        confirmPassword : 'kartik25',
    };
    let userObj = await userModel.create(user);
    console.log(userObj);
})();