import { useState,useEffect } from "react";

const CountDownComp=(()=>{
    const [countDownSec, setCountDownSec] = useState(13);
    useEffect(()=>{
        let interval = setInterval(()=>{
            if (countDownSec>0){
                setCountDownSec(countDownSec - 1)
                console.log("test");
            }
        },1000)
        return () =>{
            clearInterval(interval)
        }
    })

    return(
        <>
            <p>Playing...</p>
            <div>{countDownSec}</div>
        </>
    )
})
export default CountDownComp