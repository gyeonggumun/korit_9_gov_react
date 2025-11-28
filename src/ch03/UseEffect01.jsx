import { useState } from "react";

function UseEffect01() {
    const [num1, setNum1] = useState(0); 
    const [num2, setNum2] = useState(0); 
    const [result, setResult] = useState(0); 
    
    const handleNum10nClick = () => {
        setNum1(num1+1);
        setResult(num2 + num1);
    }

    const handleNum20nClick = () => {
        setNum2(num2+1);
        setResult(num1 + num2);
    }

    return <>
        <button onClick={handleNum10nClick}>num1 = {num1} </button>
        <button onClick={handleNum20nClick}>num2 = {num2} </button>
        <h1>{num1} + {num2} = {result}</h1>
    
    </>
}

export default UseEffect01;