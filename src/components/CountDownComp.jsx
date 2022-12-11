import countDownHook from "../hooks/countDownHook"

const CountDownComp=(()=>{
    const[counteDownSec, SetCountDownSec]=countDownHook(13)

    return(
        <div>{counteDownSec}</div>
    )
})
export default CountDownComp