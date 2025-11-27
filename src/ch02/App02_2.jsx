import { useState } from "react";


function App02_2() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [displatName, setDisplayName] = useState("");
    const [displatAge, setDisplayAge] = useState("");


    return <div>
            <InputBox name={name} setName={setName} age={age} setAge={setAge} />
            <ButtonBox setDisplayName={setDisplayName} setDisplayAge={setDisplayAge} name={name} age={age} />
            <DisplayBox displatName={displatName} displatAge={displatAge} />
    </div>
}

export default App02_2;



function InputBox({name, setName, age, setAge}) {
    

    const handleNameInputOnchange = (e) => {
        setName(e.target.value);
    }
    const handleAgeInputOnchange = (e) => {
        setAge(e.target.value);
    }


    return <div className="input-box">
        <input type="text" value={name} onChange={handleNameInputOnchange} />
        <input type="text" value={age} onChange={handleAgeInputOnchange} />
    </div>
} 

function ButtonBox({setDisplayName, setDisplayAge, name, age}) {
    const handleOnClick = () => {
        setDisplayName(name);
        setDisplayAge(age);
    }
    
    return <div className="button-box">
        <button onClick={handleOnClick} >확인</button>
    </div>
}

function DisplayBox ({displatName, displatAge}) {
    

    return <div className="display-box">
        <ul>
            <li>{displatName}</li>
            <li>{displatAge}</li>
        </ul>
    </div>
}