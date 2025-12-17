import { useState, useMemo } from 'react'
const slowFunction = (num) => {
    console.log('Calling Slow Function')
    for(let i=0; i<=1000000000; i++){}
    return num * 2
}
const UseMemo=() => {
    const [number, setNumber] = useState(0)
    const[theme, setTheme] = useState(true)
    const styling={
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    }
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])
    return (
        <div style={styling}>
            <h1>This is UseMemo</h1>
            <input type="number" value={number}/>
            <button onClick={()=>setNumber(number + 1)}>+</button>  
            <h3>Number is {doubleNumber}</h3>  
            <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>        
        </div>
    )
}

export default UseMemo