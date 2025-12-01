import { useState } from "react";

function Test01() {
    const [inputValue, setInputValue] = useState({

    });

    
    const handleInputOnChange = (e) => {
        
    }

    return <>
        <input type="text" value={inputValue}/>
        <button>검색</button>
    </>
}

export default Test01;