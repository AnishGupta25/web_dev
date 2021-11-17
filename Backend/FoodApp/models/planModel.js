const { boolean } = require("mathjs");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
    },
    price:{
        type:Number,
    },
    delivery:{
        type:Boolean,
        validate:function(){
            return diliverable;
        }
    },
    meals:{
        type:Number,
    },
    description:{
        type:String,
    }
});
