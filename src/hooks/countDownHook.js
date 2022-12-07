import { useState, useEffect } from 'react';
import axios from 'axios';

export default function countDownHook(count){

    const [sec,setSec] = useState(count)

    // useEffect(()=>{
    //     setTimeout(()=>{setSec(sec-1)},1000)
        
    // },[sec])

    return [sec,setSec]

}