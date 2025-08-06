const mongoose=require('mongoose')
const todoschema=mongoose.Schema({
    text:{
        type:String,
    }
},{
    timestamps:true,
});
module.exports=mongoose.model("todo",todoschema);