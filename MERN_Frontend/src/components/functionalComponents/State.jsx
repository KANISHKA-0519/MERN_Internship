import {useState} from "react";
const State = () => {
    const [state,updateState]=useState("State");
    const setState=()=>{
        updateState("Updated State");
    }
    return (
        <div>
            <p>This is {state} Component</p>
            <button onClick={setState}>Update</button>
        </div>
    );
}

export default State;