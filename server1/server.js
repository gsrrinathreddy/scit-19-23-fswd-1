import express from 'express'; 
import mongoose from 'mongoose';
import cors from 'cors';
const app = express(); 
app.use(cors({origin: '*'}))

app.get('/',(req,res)=>{
    res.send("I am your first get response")
})

let products = [
    {
        name:"colgate",
        price:30
    }
]
app.get('/aboutme',(req,res)=>{
    res.json({
        name:"srinath",
        fathername:"raja reddy",
        village:"karimnagar",
        qualification:'degree'
    })
})
app.get('/skills',(req,res)=>{
    res.json({
        frontend:"React",
       languages:"Javascript",
       componentLibraries:"MUI"
    })
})
app.get('/products',(req,res)=>{
    res.json({
        name:"colgate",
        price:30
    })
})

 mongoose
  .connect("mongodb+srv://srrinath:<password>@cluster0.iimhjiv.mongodb.net/scit-19-23-fswd-1?retryWrites=true&w=majority", {})
  .then(() => {
    console.log("connected to DB")
  .catch((error) => console.log(`${error} did not connect`));

 

app.listen(8000,()=> console.log("server running onport 8000"))