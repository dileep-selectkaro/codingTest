const mongoose=require("mongoose");

const personSchema=new mongoose.Schema({

    name:{
        type:String,
    },
    description:{
        type:String,
    },
    countryCode:{
        type:String,
    },
    contactNumber:{
        type:String,
    },
    email:{
        type:String,
    }

},{timestamps:true})

const Person=mongoose.model("person",personSchema);

module.exports=Person;