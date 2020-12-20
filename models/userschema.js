const mongoose = require("mongoose")
const validator = require("validator")
const studentschema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email is already present."],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email....")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:10
    }
})
const students = new mongoose.model("students", studentschema)
module.exports = students

