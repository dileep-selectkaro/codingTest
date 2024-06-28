const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({

    companyName:{
        type:String,
    },
    headOfficeAddress:{
        type:String,
    },
    country:{
        type:String,
    },
    postalCode:{
        type:String,
    },
    city:{
        type:String,
    },
    countryCode:{
        type:String,
    },

    contactNumber:{
        type:String,
    },
    websiteURL:{
        type:String,
    },
    logo:{
        type:String,
    }

},{timestamps:true})

const Company=mongoose.model("company",companySchema);

module.exports=Company;