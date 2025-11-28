import { useState } from "react";

function Inputs() {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");

    const handleNameOnChange = (e) => {
        setFullName(e.target.value);
        
    }

    const handleAgeOnChange = (e) => {
        setAge(e.target.value)
    }


    return <>
        <input type="text" onChange={handleNameOnChange} placeholder="이름" />
        <input type="text" onChange={handleAgeOnChange} placeholder="나이" />
        <h2>이름: {fullName}</h2>
        <h2>나이: {age} </h2>
    </>
}

export default Inputs;