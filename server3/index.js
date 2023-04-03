import express from 'express'; 

const app = express()

app.get("/",(req,res)=>{
    res.send("I have created my first api")
})

app.get("/about-me",(req,res)=>{
    res.json({
        name:"Srrinath",
        experience:"14 years",
        designation:"Technical Architect",
        company:"6ICUBE"
    })
})

app.get("/skills",(req,res)=>{
    res.json({
        frontend:"React",
        backend:"node,python,springboot",
        db:"mongodb,mysql,postgresql,dynamodb",
        languages:"ES6 Javascript, Python, Java"
    })
})

app.get("/products/mobiles",(req,res)=>{
 res.json(  [
    {
        company:"Apple",
        model:"iphone-12",
        price:"Rs 80000",
    
    },
    {
        company:"Samsung",
        model:"Galaxy Note+",
        price:"Rs 80000",
        url:"https:djdljdhdhf"
    },
    {
        company:"Samsung",
        model:"Flip",
        price:"Rs 1200000"
    },
    {
        company:"Realme",
        model:"aaaaa",
        price:"Rs 120000",
    },
    {
        company:"Oppo",
        model:"aaaaa",
        price:"Rs 120000"
    }
 ])
     
})

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})