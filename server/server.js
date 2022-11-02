import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express()
const PORT = 4000
app.use(cors);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

await mongoose.connect("mongodb+srv://Keshav:Keshav@cluster0.9zntmaq.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Mongo Db connecion is sucessfuls"))
.catch((err)=>console.error(error));

app.listen(PORT,()=>{
    console.log('Server is running at http://localhost:4000')
});