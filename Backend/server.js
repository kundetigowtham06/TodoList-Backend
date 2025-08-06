const express=require('express')
const app=express()
const cors=require('cors')
const todo=require('../Backend/models/todomodel')
const Connectdb=require('../Backend/config/connect')
app.use(cors());
Connectdb();
app.use(express.json())

app.get('/',async (req,res)=>{
    const todos=await todo.find();
    res.json(todos);
    

    
})
app.post('/add',async (req,res)=>{
    const {text}=req.body;
    const a=await todo.create({text});
    console.log("Successful");
})


app.listen(3000,()=>{
    console.log("server running...")
})