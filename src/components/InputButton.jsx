import React from 'react'

const InputButton = (
    {
        buttonId,
        buttonClass,
        clickEvent,
        buttonType,
        buttonValue,
        visible
    }
)=>{
    return (
        <form action="">
            
            <button 
                type={buttonType}
                className={buttonClass}
                id={buttonId}
                onClick={clickEvent}
                style={{visibility:visible? "visible":"hidden"}}
                >
                {buttonValue}
            </button>
        </form>

    )
}
export default InputButton