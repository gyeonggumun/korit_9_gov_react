import { useState } from "react";


function Counter() {
    let num = 0;
    // let numberState = useState(0);
    // let number = numberState[0];
    // let setNumber = numberState[1];
    let [number, setNumber] = useState(0);  //위에 선언한 걸 구조분해 한 결과

    console.log(number)

    const increase = () => {
        num += 1;
        console.log(num);
    }

    const decrease = () => {
        num -= 1;
        console.log(num);
    }

    const increaseNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }
    console.log("카운터 화면 렌더링");

// 리턴해주는 것은 다시 랜더링 되는 것이 아니라
// 처음 그려진 상태로 num의 값은 변하지 않고 
// 버튼을 누른다고 해서 리턴이 다시 일어나는 것이 아니기 때문에
// 그냥 num을 넣어줘도 값이 변환 되어 화면에 그려지지 않음
// 화면을 다시 그려주기 위해 필요한 것이 useState다
// useState를 사용하면 return 에서 배열이 나온다
// useState를 사용하면 화면을 계속 다시 랜더링 해줘서 리턴을 새로 일으킴
// useState는 상태를 관리해주는 공간이 따로 있어서 새로고침해주어야 초기화됨
    return <div>
        <h1>{num}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        
        <h1>{number}</h1>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
    </div>
}

export default Counter;