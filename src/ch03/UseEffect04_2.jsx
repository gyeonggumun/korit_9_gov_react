import { useEffect, useState } from "react";

function UseEffect04_2() {
    const [ num, setNum ] = useState(0);
    const [ square, setSquare ] = useState(0);
    const [ isZero, setZero ] = useState(true);

    useEffect(() => {
        setSquare(num ** 2);
    }, [num]);
    
    useEffect(() => {
        setZero(square === 0);
    }, [square]);
    
    useEffect(() => {
        if (isZero) {
            setTimeout(() => {
                alert("숫자를 증가시켜 결과를 확인하세요.");
            }, 100);
        }
    }, [isZero]);

    const handleOnClick = (value) => {
        if (value < 0 && num < 1) {
            return;
        } 
        setNum(num + value);
        setSquare((num + value) ** 2);
    }

    return <>
        <h2>{num}</h2>
        <h2>{square}</h2>
        <button onClick={() => handleOnClick(1)}>1증가</button>
        <button onClick={() => handleOnClick(-1)}>1감소</button>
    </>
}

export default UseEffect04_2;