const mongoose=require('mongoose')
const dotenv=require('dotenv').config();
const connectdb=async()=>{
    try{
        const connections=process.env.CONNECTION_STRING;
        const connect=await mongoose.connect(connections);
        console.log("connection created");

    }
    catch(err){
        console.log(err)
    }
}
module.exports=connectdb;