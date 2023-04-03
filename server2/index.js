import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())
app.get("/",(req,res)=>{
    res.send("I have successfully created my first get api")
})

app.get("/about-us",(req,res)=>{
    res.json(
        {
            name:"Neelima",
            Village:"Karimnagar",
            fatherName:"Dasaratham",
            qualification:"Degree",
            experience:"14 yrs"
        }
    )
})

app.get("/skills",(req,res)=>{
    res.json(
        {
            frontend:"React",
            backend:"node",
            db:"mongo",
            application:"Full Stack Web Development",
            experience:"14 yrs"
        }
    )
})
app.get('/education',(req,res)=>{
    res.json({
        tenth:"Thakshasila",
        inter:"alfa",
        degree:"pondicherry university"
    })
})
app.get("/products/pastes",(req,res)=>{
    res.json(
        [
            {
                name:"colgate",
                price:"Rs 50",
                url:"jadhjhdjhdh"
            },
            {
                name:"sensodyne",
                price:"Rs 100",
                url:"jadhjhdjhdh"
            },
            {
                name:"pepsodent",
                price:"Rs 75",
                url:"jadhjhdjhdh"
            },
            {
                name:"dabur",
                price:"Rs 60",
                url:"jadhjhdjhdh"
            }
        ]
        
    )
})

app.listen(8001,()=>{
    console.log("My Server is running on 8000 port")
})