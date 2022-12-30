import React from 'react'
import Waves from './Waves'
import CountDownComp from './CountDownComp'



const CardImage = ({
    kindOfImage,
    stateOfImage
}) =>{ 

    if(kindOfImage == "wave"){
        
        return(
        <>
            <Waves 
              spinner="spinner"
              rect1={"rect1 " + stateOfImage}
              rect2={"rect2 " + stateOfImage}
              rect3={"rect3 " + stateOfImage}
              rect4={"rect4 " + stateOfImage}
              rect5={"rect5 " + stateOfImage}
            />
            {stateOfImage=="move" 
                ? 
                <div>
                    <CountDownComp />
                </div>
                :<></>
            }
            

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