import {useState,useEffect} from 'react'

export default function countDownHook(sec){
    const [countDownSec, setCountDownSec] = useState(sec);
    useEffect(()=>{
        let interval = setInterval(()=>{
            if (countDownSec>0){
                setCountDownSec(countDownSec - 1)
            }
        },1000)
        return () =>{
            clearInterval(interval)
        }
    })
    return [countDownSec, setCountDownSec]
}