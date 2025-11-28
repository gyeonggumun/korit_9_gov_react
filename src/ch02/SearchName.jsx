
// 문제
// input하나를 만들고 입력된 이름과 값과 일치하는 나이를 h2태그 안에 출력하시오.
// 이름이 없으면 값 없음

import { useState } from "react";

function SearchName() {
    const [name, setName] = useState("");
    let findAge = "값 없음"
    const names = [
        {
        name: "김준일",
        age: 32,
    },
        {
        name: "김준이",
        age: 33,
    },
        {
        name: "김준삼",
        age: 34,
    },
]
    const handleOnChange = (e) => {
        setName(e.target.value);
    }

    
        for (let i = 0; i < names.length; i++) {
            if (name === names[i].name) {
                findAge= names[i].age;
            } 
        }
        


    return <div>
        <input type="text" onChange={handleOnChange}/>
        <h2>{findAge}</h2>
    </div>
}

export default SearchName;