import { useState } from "react";
import "./style.css";

function App02() {

    const [name, setName] = useState("기본 이름"); // input의 value 값이 변하면 동작
    const [addName, setNameButton] = useState("");  // 확인 버튼이 눌러지면 동작
    const [age, setAge] = useState();
    const [addAge, setAgeButton] = useState();
    const [address, setAddress] = useState("주소");
    const [addAddress, setAddressButton] = useState();

    const data = {
        title: "리엑트 기초 시작",
        nameValue: "기본 이름",
        age: "0",
        address: "주소",
    }


    const handleNameInputOnChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const handleAgeInputOnChange = (e) => {
        setAge(e.target.value);
    }
    const handleAddressInputOnChange = (e) => {
        setAddress(e.target.value);
    }


    const handleButtonOnClick = () => {
        setNameButton(name);
        setAgeButton(age);
        setAddressButton(address);
        setName("");
        setAge("");
        setAddress("");
    }

    

    const handleResetOnClick = () => {
        setNameButton("");
        setAgeButton("");
        setAddressButton("");
        setName("");
        setAge("");
        setAddress("");
    }


    return <div className="main-box">
        <div className="title-box">
            <h1>제목: {data.title} </h1>
        </div>
        <div className="input-box">
            <input type="text" value={name} onChange={handleNameInputOnChange}/>
            <input type="text" value={age} onChange={handleAgeInputOnChange}/>
            <input type="text" value={address} onChange={handleAddressInputOnChange}/>
        </div>
        <div className="button-box">
            <button onClick={handleButtonOnClick} >확인</button>
            <button onClick={handleResetOnClick} >초기화</button>
        </div>
        <div className="display-box">
            <ul>
                <li>이름:{addName} </li>
                <li>나이: {addAge} </li>
                <li>주소: {addAddress} </li>
            </ul>
        </div>
    </div>
}

export default App02;