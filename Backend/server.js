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
    res.json({message: "Todo added successfully"});
})

app.delete('/delete/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const deletedTodo=await todo.findByIdAndDelete(id);
        if(!deletedTodo){
            return res.status(404).json({message: "Todo not found"});
        }
        console.log("Todo deleted successfully");
        res.json({message: "Todo deleted successfully"});
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({message: "Error deleting todo"});
    }
})

app.listen(3000,()=>{
    console.log("server running...")
})
