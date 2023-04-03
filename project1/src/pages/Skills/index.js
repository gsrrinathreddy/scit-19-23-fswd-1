import { CircularProgress,Grid, LinearProgress, Typography,Box } from '@mui/material';
import axios from 'axios';
import { useState,useEffect} from 'react';
import ICard from '../../components/ICard';


export default function Skills(){
    let [loader,setLoader] = useState(true);
    let [photos,setPhotos] = useState(null);
    let [skills,setSkills] = useState(null);
    // axios.get('https://jsonplaceholder.typicode.com/photos')
    //      .then(res=> {
    //         console.log(res)
    //         setPhotos(res.data)
    //         setLoader(false)
    //      })
    //      .catch(err=>{
    //         console.log(err)
    //      })

        //  const makeAPICall = async () => {
        //     try {
        //         const reponse = await axios.get('/skills',{headers:{'Access-Control-Allow-Origin':'*'}})
        //         .then(res=>{
        //            console.log("skills",res.data)
        //         }).catch(err=>{
        //            console.log(err)
        //         })
        //     }
        //     catch (e) {
        //         console.log(e)
        //     }
        // }
    
        // useEffect(()=>{
        //     makeAPICall();
        // },[])
    
        const connectToServer = async () => axios.get('http://localhost:8001/about-us')
                                                 .then(res=>{
                                                    //console.log(res.data)
                                                    setSkills(res.data)
                                                    setLoader(false)
                                                 }).catch(err=>console.log(err))
    useEffect(()=>{
        connectToServer()
    },[])

       console.log("skills",skills)
        return(

        <>
            <br/>
            <br/>
        {/* {
            loader? <CircularProgress/> :  <Grid container> { photos.map((item)=>{
                return <Grid md = {2}>
                    <ICard title = {item.title} image = {item.url}/>
                    </Grid>
                 })   }    </Grid> 
        } */}
        {
            loader ? <Typography variant="h1">The Data is loading.........</Typography> :
        <Box>
            <Typography variant="h1">
            {skills.name}
        </Typography>
        <Typography variant="h1">
            {skills.fatherName}
        </Typography>
        <Typography variant="h1">
            {skills.Village}
        </Typography>
        <Typography variant="h1">
            {skills.qualification}
        </Typography>
        <Typography variant="h1">
            {skills.experience}
        </Typography>
        </Box>

        }
       
        </>
    )
}