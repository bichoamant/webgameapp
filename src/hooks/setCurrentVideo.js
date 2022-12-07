import { useState, useEffect } from 'react';


export default function setCurrentVideo(videoObj){

    const[video,setVideo] = useState(null)

    useEffect(()=>{
        setVideo(videoObj)
    },[])

    return [video,setVideo]

}