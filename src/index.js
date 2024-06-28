const express=require("express");
const app=express();
const mongoose=require("mongoose");
const companyRoute=require("./routes/companyRoute");
const managemenetRoute=require("./routes/managemenetRoute");
const moreAboutRoute=require("./routes/moreAboutRoute");
const personRoute=require("./routes/personRoute");
const productRoute=require("./routes/productRoute");

const PORT=5000
const cors=require("cors");
//middleware
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/codingTest")
.then(()=>{
    console.log("MongoDB connected Successfully")
})
.catch((error)=>{
    console.log("Connection Failed:",error)
})

//router
app.use("/",companyRoute)
app.use("/",productRoute)
app.use("/",personRoute)
app.use("/",moreAboutRoute)
app.use("/",managemenetRoute)


app.listen(PORT,()=>{
    console.log("Server is Listening on Port:",PORT)
})

