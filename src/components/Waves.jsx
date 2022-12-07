import React from 'react'



const IntroMove = ({
    spinner,
    rect1,
    rect2,
    rect3,
    rect4,
    rect5,
}) =>{ 

    return(
    <>
        <div className= {spinner}>
        <div className= {rect1}></div>
        <div className= {rect2}></div>
        <div className= {rect3}></div>
        <div className= {rect4}></div>
        <div className= {rect5}></div>
        </div>
    </>
    )

}
export default IntroMove