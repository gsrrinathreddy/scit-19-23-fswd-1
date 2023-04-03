import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("I succesfully wrote my first get api in node")
})


app.get("/about-me",(req,res)=>{
    res.json({
        name:"Srrinath",
        village:"vinjapally",
        town:"karimnagar"
    })
})

app.get("/skills",(req,res)=>{
    res.json({
        frontend:"React",
        bankend:"node",
        db:"mongo"
    })
})

app.get("/bookmyshow/movies",(req,res)=>{
    res.json(
        [
            {
                name:"balagam",
                language:"telugu",
                theater:"sriramana",
                stars:"lsdlh",
                rating:"4.6"
            },
            {
                name:"dasara",
                language:"telugu",
                theater:"devi",
                stars:"nani",
                rating:"4.4"
            },
            {
                name:"boss",
                language:"telugu",
                theater:"tirumala",
                stars:"chiranjeevi",
                rating:"4.2"
            },
            {
                name:"pathan",
                language:"hindi",
                theater:"manju",
                stars:"sharukh",
                rating:"4.2"
            }
        ]
    )
})

app.listen(8000,()=>{
    console.log("My server running on port 8000")
})