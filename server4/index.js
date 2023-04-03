import express from 'express'; 
import cors from 'cors';
const app = express();
app.use(cors());
app.get("/",(req,res)=>{
    
    res.send("My first get api is ready")
})


app.get("/about-me",(req,res)=>{
    res.json(
        {
            name:"srrinath",
            experience:"14 years",
            village:"Karimnagar"
        }
    )
})

app.get("/skills",(req,res)=>{
    res.json(
        {
            frontend:"React",
            backend:"node",
            db:"mongo"
        }
    )
})


app.get("/certifications",(req,res)=>{
    res.json(
        {
            frontend:"React Certification",
            backend:"nodej Developer Certification",
            db:"mongodb expert",
            cloud:"AWS Certification"
        }
    )
})



app.get("/hobbies",(req,res)=>{
    res.json(
        {
            sports:"badminton,cricket,carroms,chess",
            entertainment:"watching movies",
            food:"cooking",
            art:"Listening songs and dancing"
        }
    )
})

app.get("/workshops",(req,res)=>{
    res.json(
        {
            frontend:"React",
            backend:"node",
            db:"mongo",
            fullstack:"MERN - Mongo Express React and Node"
        }
    )
})

app.get("/products/mobiles",(req,res)=>{
    res.json(
       [
        {
            name:"Apple",
            model:"iphone-12",
            price:"Rs 80000",
            url:"https:jsdhfljahflhlh"
        },
        {
            name:"Samsung",
            model:"Galaxy Note+",
            price:"Rs 80000",
            url:"https:jsdhfljahflhlh"
        },
        {
            name:"Samsung",
            model:"flip",
            price:"Rs 128000",
            url:"https:jsdhfljahflhlh"
        },
        {
            name:"Oppo",
            model:"asd",
            price:"Rs 80000",
            url:"https:jsdhfljahflhlh"
        },
        {
            name:"One+",
            model:"m5",
            price:"Rs 22000",
            url:"https:jsdhfljahflhlh"
        },
       ]
    )
})

app.listen(8000,()=>{
    console.log("My server is running on port 8000")
})