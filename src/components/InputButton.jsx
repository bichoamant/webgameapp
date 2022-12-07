import React from 'react'

const InputButton = (
    {
        buttonId,
        buttonClass,
        clickEvent,
        buttonType,
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
                START
            </button>
        </form>

    )
}
export default InputButton