import {useState,useEffect} from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Box} from '@mui/material';

export default function Certifications(){
    let [loader,setLoader] = useState(true);
    let [edu,setEdu] = useState(null);

    let connectToServer = async  () => axios.get('http://localhost:8001/education')
                                            .then(res=>{
                                                setEdu(res.data)
                                                console.log(res.data)
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
    useEffect(()=>{
        connectToServer()
    },[])
    console.log("education",edu)
    return(

        <>
            I am going to be a certified full stack developer
            {
                loader? <CircularProgress/> : <Box>
                    <Typography variant="h1">
                        {edu.tenth}
                    </Typography>
                    <Typography variant="h1">
                        {edu.inter}
                    </Typography>
                    <Typography variant="h1">
                        {edu.degree}
                    </Typography>
                </Box>
            }
        </>
    )
}