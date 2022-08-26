import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    techstack : {
        type : String,
        required : true
    },
    dateofbirth : {
        type : Date
    },
    profileurl : {
        type : String,
        required : true
    },
    interests : {
        type : Array,
        required : true
    },
    bio : {
        type : String,
        required : true,
        maxlength : 250
    }
})

const userModel = new mongoose.model("Users",userSchema,"formdata");
export default userModel;