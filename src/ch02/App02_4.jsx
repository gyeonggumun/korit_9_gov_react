import { useState } from "react";

function App02_4() {
    const [todos, setTodos] = useState([]);
    
    return <>
        <TodoInput todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos}/>
    </>
}

function TodoInput({todos, setTodos}) {
    const [value, setValue] = useState("");
    const [nameValue, setNameValue] = useState("");

    const handleNameOnChange = (e) => {
        setNameValue(e.target.value);
    }

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleOnClick = () => {
        
        const todo = {
            name: nameValue,
            contents: value,
            writeDate: new Date().toLocaleString(),
        }
        setTodos([...todos, todo]);
        setNameValue("");
        setValue("");
        

    }


    return <div>
        <input type="text" value={nameValue} onChange={handleNameOnChange}/>
        <input type="text" value={value} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>입력</button>
    </div>
}

function TodoList({todos}) {
    
    return <ul>
        {
            todos.map(todo => <li>작성자:{todo.name}  내용:{todo.contents}  작성일{todo.writeDate}</li>)
        }
        </ul>
}








export default App02_4;
