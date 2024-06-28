const mongoose=require("mongoose");

const aboutSchema=new mongoose.Schema({

    companyProfile:{
        type:String,
    },
    facebookLinkedIn:{
        type:String,
    },
    vision:{
        type:String,
    },

},{timestamps:true})

const About=mongoose.model("about",aboutSchema);

module.exports=About;