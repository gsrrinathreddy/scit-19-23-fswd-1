import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());


app.get("/",(req,res)=>{
    res.send("I have ssuccessfully written my first api")
})

app.get("/profile",(req,res)=>{
    res.json(
        {
            name:"Srrinath",
            qualification:"degree",
            experience:"14 years"
        }
    )
})

app.get("/projects",(req,res)=>{
    res.json(
        {
            project1:"fullstack portfolio",
            project2:"student management system",
            project3:"patient management system",
            project4:"college placements management sytem"
        }
    )
})

app.get("/products/mobiles",(req,res)=>{
    res.json(
       [
        {
            brand:"Apple",
            model:"iphone-12",
            price:"Rs 128000"
        },
        {
            brand:"samsung",
            model:"Galaxy note+",
            price:"Rs 80000"
        },
        {
            brand:"oppo",
            model:"s6",
            price:"Rs 28000"
        },
        {
            brand:"Redme",
            model:"m6",
            price:"Rs 18000"
        },
        {
            brand:"One Plus",
            model:"m5",
            price:"Rs 8000"
        }
       ]
    )
})
app.listen(8005,()=>{
     console.log("my server is running on port 8005")
})