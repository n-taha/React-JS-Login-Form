import { useState } from "react";

function Dynamic(){
    const [Active , DeActive] = useState(true)
    const Activity = ()=>{
        DeActive(!Active)
    }
    return(
        <>
        <button className={ Active ? "btnActive" : "btnDeActive"} onClick={Activity}>
            {Active ? "Button Activate" : "Button Deactivate"}
        </button>
        </>
    )
}

export default Dynamic;