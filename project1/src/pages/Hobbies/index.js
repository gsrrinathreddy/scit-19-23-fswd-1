import {useState,useEffect} from 'react';
import axios from 'axios';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function Hobbies(){
    let [loader,setLoader] = useState(true);
    let [cert,setCert] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8000/hobbies')
                                             .then(res=> {
                                                console.log(res.data);
                                                setCert(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])
    return(
        <>This is Hobbies
         {
            loader ? <CircularProgress/> : <Box>
                <Typography>
                    {cert.sports}
                </Typography>
                <Typography>
                    {cert.food}
                </Typography>
                <Typography>
                    {cert.entertainment}
                </Typography>
                <Typography>
                    {cert.art}
                </Typography>
            </Box>
        }
        
        
        </>
       
    )
}