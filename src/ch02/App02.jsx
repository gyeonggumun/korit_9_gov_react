import { useState } from "react";
import "./style.css";

function App02() {

    const [name, setName] = useState("기본 이름");

    const data = {
        title: "리엑트 기초 시작",
        nameValue: "기본 이름",
        age: "0",
    }

    const handleNameInputOnChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    return <div className="main-box">
        <div className="title-box">
            <h1>제목: {data.title} </h1>
        </div>
        <div className="input-box">
            <input type="text" value={name} onChange={handleNameInputOnChange}/>
            <input type="text" value={data.age}/>
        </div>
        <div className="button-box">
            <button>확인</button>
            <button>초기화</button>
        </div>
        <div className="display-box">
            <ul>
                <li>이름:{name} </li>
                <li>나이: </li>
            </ul>
        </div>
    </div>
}

export default App02;