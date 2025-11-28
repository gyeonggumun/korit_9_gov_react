import { useEffect, useState } from "react";


function UseEffect03() {
    console.log("Component 함수 호출됨");
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ result, setResult ] = useState(0);
    
    useEffect (()=> {
        console.log("마운트");
    }) // 배열이 없으면 무조건 실행

    useEffect(() => {  // 배열에 있는 값의 변화를 감지하여 마운트 될 때 실행
        setResult(num1 + num2);
    }, [num1, num2]); // 배열이 비어있으면 처음 한번만 실행

    const handleNum1OnClick = () => {
        setNum1(num1 + 1);
    }

    const handleNum2OnClick = () => {
        setNum2(num2 + 1);
    }

    console.log("JSX 리턴 직전");

    return <>
    <button onClick={handleNum1OnClick}>num1 = {num1}</button>
    <button onClick={handleNum2OnClick}>num2 = {num2}</button>
        <h2>{num1} + {num2} = {result}</h2>
    </>
}

export default UseEffect03;