import { CircularProgress, Typography,Box } from '@mui/material';
import axios from 'axios'; 
import { useEffect, useState } from 'react';

export default function Projects(){
    let [loader,setLoader] = useState(true);
    let [projects,setProjects] = useState(null); 

    const getProjectsData = async () => axios.get('http://localhost:8005/projects')
                                             .then(res=>{
                                            
                                                setProjects(res.data)
                                                setLoader(false)
                                             }).catch(err => console.log(err))

    
    useEffect(()=>{
        getProjectsData();
    },[])
    console.log("projects",projects)
    

    // const getProfileData = async () => axios.get('http://localhost:8005/profile')
    //                                         .then(res=>{
    //                                             //console.log(res.data)
    //                                             setProfile(res.data);
    //                                             setLoader(false)
    //                                         }).catch(err=>{console.log(err)})
   
    // useEffect(()=>{
    //     getProfileData()
    // },[])
  
    return(
        <>
            This is projects page
            {
                loader ? <CircularProgress/> : <Box>
                    <Typography variant="h3">
                        {projects.project1}
                    </Typography>
                    <Typography variant="h3">
                        {projects.project2}
                    </Typography>
                    <Typography variant="h3">
                        {projects.project3}
                    </Typography>
                    <Typography variant="h3">
                        {projects.project4}
                    </Typography>
                </Box>
            }
            
        </>
    )
}