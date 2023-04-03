import {useState,useEffect} from 'react'
import axios from 'axios';
import { CircularProgress, Typography,Box } from '@mui/material';

export default function Qualification(){
    const [loader,setLoader] = useState(true);
    const [qual,setQual] = useState(null)

    const connectToServer = async () => axios.get('http://localhost:8000/certifications')
    .then(res=>{
       console.log(res.data)
       setQual(res.data)
       setLoader(false)
    }).catch(err=>console.log(err))

    
    useEffect(()=>{
connectToServer()
},[])
     
    return(

        <>
        {
            loader ? <CircularProgress/> : <Box>
                <Typography>
                    {qual.frontend}
                </Typography>
                <Typography>
                    {qual.backend}
                </Typography>
                <Typography>
                    {qual.db}
                </Typography>
                <Typography>
                    {qual.cloud}
                </Typography>
            </Box>
        }
            This is Qualification me page
        </>
    )
}