import { useState, useEffect } from "react";
const UseEffect = () => {
var[text,updateText] =  useState("");
var[number,updateNumber] =  useState("");
useEffect(() => {console.log(text)},[text]);
useEffect(() => {console.log(number)},[number]);
    return (
        <div>
            <h3>This is UseEffect Hook</h3>
            <input type="text" value={text} onChange={(e) => {updateText(e.target.value)}} />
             <h3>This is UseEffect Hook number</h3>
            <input type="number" value={number} onChange={(e) => {updateNumber(e.target.value)}} />
        </div>
    );
};
export default UseEffect;