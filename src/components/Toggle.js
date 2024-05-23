import { memo } from "react";

function Toggler({onIncrease}){
    console.log('re-render')
    return(
        <>
            <h1>Hello Anh Em</h1>
            <button onClick={onIncrease} className="btn btn-info">Click me!</button>
        </>
    )
}
export default memo(Toggler);