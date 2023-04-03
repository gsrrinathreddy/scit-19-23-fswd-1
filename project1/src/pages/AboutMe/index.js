import axios from 'axios';
import { useEffect } from 'react';
export default function AboutMe(){
    const makeAPICall = async () => {
        try {
            const reponse = await axios.get('/aboutme',{headers:{'Access-Control-Allow-Origin':'*'}})
            .then(res=>{
               console.log("res",res.data)
            }).catch(err=>{
               console.log(err)
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        makeAPICall();
    },[])
    

    return(

        <>
            This is About me page
        </>
    )
}