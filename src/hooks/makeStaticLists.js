import { useState, useEffect } from 'react';
import axios from 'axios';

export default function makeStaticLists(URL, listName){

    const[val,setVal] = useState(null)

    useEffect(()=>{
        axios.get(URL).then(({data})=>{
            
            setVal(Reflect.get(data,listName))
        })
    },[])

    return [val,setVal]

}