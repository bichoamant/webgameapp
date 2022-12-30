import React from 'react'

const InputButton = (
    {
        buttonId,
        buttonClass,
        clickEvent,
        buttonType,
        buttonValue,
        style
    }
)=>{
    return (
        <form action="">
            
            <button 
                type={buttonType}
                className={buttonClass}
                id={buttonId}
                onClick={clickEvent}
                >
                {buttonValue}
            </button>
        </form>

    )
}
export default InputButton