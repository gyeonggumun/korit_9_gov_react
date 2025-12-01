import { useEffect, useState } from "react";

function UseEffect04() {
    // num 상태
    // num 상태의 제곱 값을 화면에 출력하시오.
    // 단 처음 num이 0일 때에는
    // '숫자를 증가시켜 결과를 확인하세요.'
    // 라는 안내 메세지를 alert으로 출력하기.
    // 최소값 0 밑으로는 내려갈 수 없음.

    const [num, setNum] = useState(0);
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        if (num === 0) {
            alert("숫자를 증가시켜 결과를 확인하세요");
        }
    }, [num]);
    
    useEffect(() => {
        setResult(num * num);
    }, [num]);
    

    const handleAddOnClick = () => {
        setNum(num + 1);
    } 

    const handleMinOnClick = () => {
        if (num === 0) {
            alert("0 밑으로 숫자를 내릴 수 없습니다.");
            return 0;
        } 
        setNum(num - 1);
        
        
    }

    
    

    return <>
        <h2>{num}</h2>
        <button onClick={handleAddOnClick}>1증가</button>
        <button onClick={handleMinOnClick}>1감소</button>
        <h1>num 제곱: {result}</h1>
        
    </>
}

export default UseEffect04;