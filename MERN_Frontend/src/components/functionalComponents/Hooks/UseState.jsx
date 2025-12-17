import { useState } from 'react';
const UseState = () => {
    const [number, updateNumber] = useState(0);
    const addTion = () => {
        updateNumber(number + 1);
    }
    const subTract = () => {
        updateNumber(number - 1);
    }
    const reset = () => {
        updateNumber(0);
    }
   return (
    <div>
        <h2>UseState Hook Example</h2>
        <button onClick={subTract}>-</button>
        <input type="number" value={number}/>
        
        <button onMouseEnter={addTion}>+</button>
        <button onDoubleClick={reset}>Reset</button>
    </div>
   ) 
}
export default UseState;