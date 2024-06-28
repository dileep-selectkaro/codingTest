const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

    productName:{
        type:String,
    },
    productPortfolioDescription:{
        type:String,
    },
    facebookLinkedIn:{
        type:String,
    },

},{timestamps:true})

const Product=mongoose.model("product",productSchema);

module.exports=Product;