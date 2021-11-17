const mongoose = require('mongoose');
const validator = require('email-validator');

const db = require('../secrets');

mongoose.connect(db.link).then(function(){
    // console.log('connected');
})
.catch(function(err){
    console.log('err');
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return validator.validate(this.email);
        }
    },
    createdAt:{
        type:Date
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    confirmPassword:{
        type:String,
        required:true,
        min:8,
        validate:function(){
            return this.password==this.confirmPassword
        }
    }
});

userSchema.pre('save',function(){
    this.confirmPassword=undefined;
});

const userModel=mongoose.model('userModel',userSchema);

module.exports=userModel;

// (async function createUser(){
//     let user={
//         name:'Abhi',
//         age:20,
//         email:'abcd@gmail.com',
//         password:'12345678',
//         confirmPassword:'12345678'
//     };
    
//     console.log(userObj);
// })();