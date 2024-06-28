const mongoose=require("mongoose");

const managementSchema=new mongoose.Schema({

    name:{
        type:String,
    },
    description:{
        type:String,
    },
    profileSummary:{
        type:String,
    },
    linkedIn:{
        type:String,
    }

},{timestamps:true})

const Management=mongoose.model("management",managementSchema);

module.exports=Management;