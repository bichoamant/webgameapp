import React from 'react'
import Waves from './Waves'



const CardImage = ({
    kind,
    value
}) =>{ 

    if(kind == "wave"){
        
        return(
        <>
            <Waves 
              spinner="spinner"
              rect1={"rect1 " + value}
              rect2={"rect2 " + value}
              rect3={"rect3 " + value}
              rect4={"rect4 " + value}
              rect5={"rect5 " + value}
            />
        </>
        )
    }else{
        return(

            <>
            <Waves 
              spinner="spinner"
              rect1=""
              rect2=""
              rect3=""
              rect4=""
              rect5=""
            />
        </>
        )
    }

}
export default CardImage